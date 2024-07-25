import NextAuth, {type DefaultSession} from "next-auth";

export type ExtededUser = DefaultSession["user"] & {
    credit : Number ;
} ;

declare module "next-auth" {
    interface Session {
        user: ExtededUser ;
    }
}