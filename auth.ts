import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {ZodError} from "zod"
import { signInSchema } from "@/lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null
 
          const { email, password } = await signInSchema.parseAsync(credentials)
 
          
 
          if (!user) {
            throw new Error("User not found.")
          }
 
          // return json object with the user data
          return user
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    }),
  ],
})