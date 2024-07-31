import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { getUserById } from "./data/user" 
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db" 
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation"
import { getAccountByUserId } from "./data/account"
 
export const { handlers, auth, signIn, signOut,} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  },
  events:{
    async linkAccount({user}){
      await db.user.update({
        where: {id: user.id},
        data: {emailVerified: new Date()}
      })
    },
  }
  ,callbacks: {
    async signIn({user, account}){
      //allow OAuth without verifications
      if(account?.provider !== "credentials") return true ;

      const existingUser = await getUserById(user.id) ;

      //prevent signIn without verifications 
      if(!existingUser?.emailVerified) return false ;

      //2FA
      if(existingUser.isTwoFactorEnabled){
        const TwoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id) ;

        if(!TwoFactorConfirmation) return false ;

        await db.twoFactorConfirmation.delete({
          where: {id: TwoFactorConfirmation.id} ,
        })
      }

      return true ;
    },

    async session({token,session}){

      if(token.sub && session.user){
        session.user.id = token.sub ;
      }

      if(session.user){
        session.user.name = token.name ;
        session.user.email = token.email as string ;
        session.user.isOAuth = token.isOAuth as boolean ;
        session.user.credit = token.credit as number;
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean ;
      }

      return session ;
    },

    async jwt({token}) {
      if(!token.sub) return token ;

      const existingUser = await getUserById(token.sub) ;

      if(!existingUser) return token ;

      const existingAccount = await getAccountByUserId(existingUser.id) ;

      token.isOAuth = !!existingAccount ;
      token.name = existingUser.name ;
      token.email = existingUser.email ;
      token.credit = existingUser.credit ;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled ;

      return token ;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})

