import { SessionProvider } from "next-auth/react";
import { Navbar } from "../ui/Navbar";
import { auth } from "../../auth";
import { Toaster } from "sonner";

interface ProtectedLayoutProps {
    children: React.ReactNode;
};

export default async function ProtectedLayout({children} : ProtectedLayoutProps) {
    const session = await auth() ;
    return (
        
        <SessionProvider session={session}>
            
            <div className="flex-1 bg-muted w-full">
                <Navbar/>
                <div className="py-5 sm:px-4">
                    <Toaster position="top-center"/>
                    {children}
                    
                </div>
            </div>
           
        </SessionProvider>
    ) ;
}