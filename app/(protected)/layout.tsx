import { SessionProvider } from "next-auth/react";
import { Navbar } from "../ui/Navbar";
import { auth } from "../../auth";

interface ProtectedLayoutProps {
    children: React.ReactNode;
};

export default async function ProtectedLayout({children} : ProtectedLayoutProps) {
    const session = await auth() ;
    return (
        
        <SessionProvider session={session}>
            
            <div className="flex-1 bg-muted w-full">
                <Navbar/>
                <div className="container w-full mx-auto flex h-full flex-col items-center justify-center px-4 py-12 sm:px-4 lg:px-8">
        
                    {children}
                    
                </div>
            </div>
           
        </SessionProvider>
    ) ;
}