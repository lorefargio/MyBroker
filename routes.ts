//array of routes that are accessible to the public 
export const publicRoutes = [
    "/",
];

//array of routes that are used for authentications 
export const authRoutes = [
    "/login",
    "/register",
];

//the prefix for API authentication routes 
export const apiAuthPrefix = "/api/auth";

//default redirect path after login
export const DEFAULT_LOGIN_REDIRECT = "/home"