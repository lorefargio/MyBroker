import LoginForm from "../ui/login-form";
import NameHeader from "../ui/name-header"

export default function LoginPage() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <NameHeader/>
            <div className="flex items-center justify-center bg-muted px-4 py-12 sm:px-6 lg:px-8 flex-1">
                <div className="mx-auto w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
                        Log in to your account
                        </h2>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </div>
    ) ;
}