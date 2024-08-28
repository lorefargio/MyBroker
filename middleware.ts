import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes} from "./routes"
const { auth } = NextAuth(authConfig)

export default auth((req) : any=> {
    const {nextUrl} = req ;
    const isLoggedIn = !!req.auth ;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    
    if(isApiAuthRoute){
        return null ;
    }
    
    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl)) ;
        }
        return null ;
    }

    if(!isLoggedIn && !isPublicRoutes){
        return Response.redirect(new URL("/auth/login",nextUrl)) ;
    }

    return null ;
})

export const config = {
    matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)','/(api|trpc)(.*)']
}