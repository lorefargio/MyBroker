"use server"
import * as z from "zod"
import { LoginSchema } from "../schemas";
import { signIn } from "../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values) ;

    if(!validateFields.success){
        return {error : "invalid fields!"} ;
    }

    const {email, password} = validateFields.data ;

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