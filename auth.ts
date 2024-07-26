import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { getUserById } from "./data/user" 
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db" 

 
export const { handlers, auth, signIn, signOut } = NextAuth({
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

      //add 2FA check

      return true ;
    },

    async session({token,session}){

      if(token.sub && session.user){
        session.user.id = token.sub ;
      }
      
      if(session.user){
        session.user.credit = token.credit as Number;
      }

      return session ;
    },

    async jwt({token}) {
      if(!token.sub) return token ;

      const existingUser = await getUserById(token.sub) ;

      if(!existingUser) return token ;

      token.credit = existingUser.credit ;

      return token ;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})

