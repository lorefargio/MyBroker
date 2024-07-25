import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import type { NextAuthConfig } from "next-auth"
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [Credentials(
    {
      async authorize(credentials) {
          const validateFields = LoginSchema.safeParse(credentials) ;

          if(validateFields.success) {
            const {email, password} = validateFields.data;

            const user = await getUserByEmail(email) ;
            if(!user || !user.password) return null ;

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if(passwordsMatch) return user ;
          }
          return null ;
      }
    }
  )],
} satisfies NextAuthConfig