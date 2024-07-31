import NextAuth, {type DefaultSession} from "next-auth";

export type ExtededUser = DefaultSession["user"] & {
    credit : number ;
    isTwoFactorEnabled : boolean;
    email : string ;
    isOAuth: boolean;
} ;

declare module "next-auth" {
    interface Session {
        user: ExtededUser ;
    }
}