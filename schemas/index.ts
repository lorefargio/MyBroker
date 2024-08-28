import * as z from "zod"

export const LoginSchema = z.object({
    email : z.string().email(),
    password: z.string().min(1,{
        message: "Password is required"
    }),
    code: z.optional(z.string()), 
})

export const RegisterSchema = z.object({
    email : z.string().email(),
    password: z.string().min(6,{
        message: "Minimum 6 characters required",
    }),
    name : z.string().min(1, {
        message:"Name is required" ,
    }),
})

export const ResetSchema = z.object({
    email : z.string().email(),
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6,{
        message: "Minimum 6 characters required",
    })
})

export const SettingsSchema  = z.object({
    name : z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    credit: z.optional(z.number()),
    creditToAdd: z.optional(z.string().transform((val) => parseFloat(val))),
})
    .refine((data) => {
        if(data.password && !data.newPassword) {
            return false ;
        }

        return true ;
    }, {
        message: "New Password is required!",
        path: ["newPassword"]
    }) 

    .refine((data) => {

        if(data.newPassword && !data.password) {
            return false ;
        }

        return true ;
    }, {
        message: "Password is required!",
        path: ["password"]
    })

    .refine((data) => {
        if(data.creditToAdd){
            if(data.creditToAdd < 0) return false ;
        }

        return true ;
    },{
        message: "The credit to be added cannot be negative",
        path:["creditToAdd"]
    });

export const BuySchema = z.object({
    sharesNumber: z.string().min(1)
})
    .refine((data) => {

        if(Number(data.sharesNumber) < 1){
            return false
        }else{
            return true ;
        }

        
    },{message: "The number of shares must be greater than or equal to one",
        path:["sharesNumber"]
    })