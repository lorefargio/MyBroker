"use server"
import * as z from "zod"
import { RegisterSchema } from "../schemas";
import bcrypt from "bcryptjs" ;
import { db } from "@/lib/db";  
import { getUserByEmail } from "../data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { create } from "domain";

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values) ;

    if(!validateFields.success){
        return {error : "invalid fields!"} ;
    }

    const {name, email, password} = validateFields.data ;
    const hashedPassword = await bcrypt.hash(password,10) ;

    const existingUser = await getUserByEmail(email)

    if(existingUser){
        return {error: "Email already in use."} ;
    }

    await db.user.create({
        data: {
            name,
            email,
            password : hashedPassword,
            portfolio : {
                create : {
                    stocks : {create : []},
                    etfs : {create : []},
                    cryptos : {create: []}
                }
            }
        },
    }) ;

    const verificationToken = await generateVerificationToken(email) ;

    await sendVerificationEmail(verificationToken.email,verificationToken.token) ;
    console.log("email:",verificationToken.email,verificationToken.token)
    return {success : "Email sent!"} ;
}