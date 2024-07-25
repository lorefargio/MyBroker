import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { getUserById } from "./data/user" 
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db" 

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
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

