import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY) ;

export const sendVerificationEmail = async (
    email:string, token:string 
) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

    await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: email,
        subject: "Confirm your email",
        html: `<div class="bg-white p-6">
            <header class="mb-6">
            <h1 class="text-2xl font-bold text-black">MyBroker</h1>
            </header>
            
            <p>Click <a href="${confirmLink}">here</a> to confirm your email</p>`
    });
}

export const sendPasswordResetEmail = async (
    email: string , token : string 
) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}` ;

    await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: email,
        subject: "Reset your password",
        //html: `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`
        html: `<div class="bg-white p-6">
            <header class="mb-6">
            <h1 class="text-2xl font-bold text-black">MyBroker</h1>
            </header>
            
            <p>Click <a href="${resetLink}">here</a> to reset your password</p>
            `
    })
}