'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import * as z from "zod"

import { NewPasswordSchema } from "../../schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { CardWrapper } from "./card-wrapper";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { newPassword } from "../../actions/new-password";


export default function NewPasswordForm() {

    const searchParams = useSearchParams() ;
    const token = searchParams.get("token") ;

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition() ;

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
      resolver: zodResolver(NewPasswordSchema),
      defaultValues : {
        password:"",
      },
    }) ;

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
      setError("") ;
      setSuccess("") ;
      
      startTransition(() => {
        newPassword(values, token)
        .then((data) => {
          setError(data?.error)
          setSuccess(data?.success) 
        })
         
      })
    }

    return (
      <CardWrapper
        title="Enter a new password"
        backButtonLabel="Back to Login"
        backButtonHref="/auth/login"
      >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input {...field}
                            disabled = {isPending}
                            placeholder="******"
                            type="password" 
                          />
                        </FormControl>
                      <FormMessage/>
                    </FormItem>)}
                />
              </div>

              <FormError message={error}/>
              <FormSuccess message={success}/>

              <Button type = "submit" className="w-full" disabled = {isPending}>
                Reset Password
              </Button>
            </form>
          </Form>
      </CardWrapper>
  )              
}
