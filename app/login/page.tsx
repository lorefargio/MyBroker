import LoginForm from "../ui/login-form";
import NameHeader from "../ui/name-header"
import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "../../auth";
import { AuthError } from "next-auth";

export default function LoginPage() {
    return (
        
        <div className="flex flex-col min-h-[100dvh]">
            <NameHeader/>

            <main className="flex-1 bg-muted">
                <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 py-12 sm:px-4 lg:px-8">
        
                    <LoginForm></LoginForm>
                    
                </div>
            </main>

        </div>
    ) ;
}

