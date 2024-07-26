"use server"
import * as z from "zod"
import { LoginSchema } from "../schemas";
import { signIn } from "../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "../data/user";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values) ;

    if(!validateFields.success){
        return {error : "invalid fields!"} ;
    }

    const {email, password} = validateFields.data ;

    const existingUser = await getUserByEmail(email) ;

    if (!existingUser || !existingUser.email || !existingUser.password) return {error : "Email does not exist!"}

    if(!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email) ;
        
        await sendVerificationEmail(verificationToken.email,verificationToken.token);
        
        return {success : "Confermation Email sent!"} ;
    }

    try{
        await signIn("credentials",{
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    }catch(e){
        if(e instanceof AuthError){
            switch (e.type) {
                case "CredentialsSignin":
                    return {error: "Invalid Credential"} ;
                default:
                    return {error: "Somerthing went wrong!"}
            }
        }
        throw e ;
    }

    return {success : "Email sent!"} ;
}