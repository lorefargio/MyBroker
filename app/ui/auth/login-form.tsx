'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { useState, useTransition, Suspense } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import * as z from "zod"

import { LoginSchema } from "../../../schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { CardWrapper } from "../card-wrapper";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { login } from "../../../actions/login";
import { Loader } from "../loader";

const SearchParamsError: React.FC<{ children: (urlError: string) => React.ReactNode }> = ({ children }) => {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked" 
      ? "Email already in use with different provider" 
      : "";

  return <>{children(urlError)}</>; // Passa l'errore ai componenti figli
};


export default function LoginForm() {
    const [showTwoFactor, setShowTwoFactor] = useState(false) ;
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition() ;

    const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues : {
        email:"",
        password:"",
      },
    }) ;

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      setError("") ;
      setSuccess("") ;

      startTransition(() => {
        login(values)
        .then((data) => {
          if(data?.error) {
            form.reset()
            setError(data.error) ;
          }

          if(data?.success){
            form.reset()
            setSuccess(data.success) ;
          }
          if(data?.twoFactor){
            setShowTwoFactor(true) ;
          }
          
        })
          .catch(() => setError("Something went wrong")) ;
         
      })
      
    }

    return (
      <CardWrapper
            title={showTwoFactor ? "Check your e-mail!!" : "Welcome Back"}
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Suspense fallback={<Loader />}>
                <SearchParamsError>
                    {(urlError) => (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-4">
                                    {showTwoFactor && (
                                        <FormField
                                            control={form.control}
                                            name="code"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Two Factor Code</FormLabel>
                                                    <FormControl>
                                                        <Input {...field}
                                                            disabled={isPending}
                                                            placeholder="123456"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}

                                    {!showTwoFactor && (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input {...field}
                                                                disabled={isPending}
                                                                placeholder="email"
                                                                type="email"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Password</FormLabel>
                                                        <FormControl>
                                                            <Input {...field}
                                                                disabled={isPending}
                                                                placeholder="*******"
                                                                type="password"
                                                            />
                                                        </FormControl>
                                                        <Button size="sm" variant="link" asChild className="px-0">
                                                            <Link href="/auth/reset">
                                                                Forgot password?
                                                            </Link>
                                                        </Button>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}
                                </div>

                                <FormError message={error || urlError} />
                                <FormSuccess message={success} />

                                <Button type="submit" className="w-full" disabled={isPending}>
                                    {showTwoFactor ? "Confirm" : "Login"}
                                </Button>
                            </form>
                        </Form>
                    )}
                </SearchParamsError>
            </Suspense>
        </CardWrapper>
  )              
}
