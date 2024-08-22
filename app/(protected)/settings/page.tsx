"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { SettingsSchema } from "../../../schemas";

import { 
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card";

import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage
} from "@/components/ui/form"

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { settings } from "../../../actions/settings";
import { useTransition, useState } from "react";
import { useSession} from "next-auth/react";
import { useForm } from "react-hook-form";
import { useCurrentUser } from "../../../hooks/use-current-user";
import { FormError } from "../../ui/auth/form-error";
import { FormSuccess } from "../../ui/auth/form-success";
import { Switch } from "@/components/ui/switch";


const SettingPage = () => {
    const user = useCurrentUser() ;

    const {update} = useSession() ;
    const [error, setError] = useState<string | undefined>() ;
    const [success, setSuccess] = useState<string | undefined>() ;
    const [isPending, startTransition] = useTransition() ;


    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver : zodResolver(SettingsSchema),
        defaultValues: {
            name: user?.name || undefined,
            email: user?.email || undefined,
            password: undefined,
            newPassword: undefined,
            credit: user?.credit,
            creditToAdd: undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
        }
    });
    
    const onSubmit = (values :z.infer<typeof SettingsSchema> ) => {
        setError("") ;
        setSuccess("") ;
        startTransition(() => {
            settings(values)
            .then((data) => {
                if(data.error) {
                    setError(data.error);
                }

                if(data.success){
                    update();
                    setSuccess(data.success);
                }
            })
            .catch(() => setError("Something went wrong!"))
        })

    }

    return (
        
        <Card className="w-full max-w-[600px] mx-auto p-4 sm:p-6 md:p-8">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                ⚙️ Settings 
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField control={form.control} name="name" render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                        placeholder="name"
                                        disabled={isPending}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>

                            
                            {//hide the mail,password,twoFactorAuthentication fields for users who use OAuth
                                user?.isOAuth === false && (
                                <>
                                    <FormField control={form.control} name="email" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input {...field}
                                                placeholder="email"
                                                type="email"
                                                disabled={isPending}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>

                                    <FormField control={form.control} name="password" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input {...field}
                                                placeholder="******"
                                                type="password"
                                                disabled={isPending}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>

                                    <FormField control={form.control} name="newPassword" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>New Password</FormLabel>
                                            <FormControl>
                                                <Input {...field}
                                                placeholder="******"
                                                type="password"
                                                disabled={isPending}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>

                                    <FormField control={form.control} name="isTwoFactorEnabled" render={({field}) => (
                                        <FormItem className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 shadow-sm">
                                            <div className="space-y-0.5">
                                                <FormLabel>Two Factor Authentication</FormLabel>
                                                <FormDescription>
                                                    Enable two factor authentication for your account
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch disabled={isPending} checked={field.value} onCheckedChange={field.onChange}/>
                                            </FormControl>
                                        </FormItem>
                                    )}/>
                                </>
                            )}


                            <FormField control={form.control} name="creditToAdd" render={({field}) => (
                                <FormItem className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 shadow-sm">
                                    
                                    <div className="space-y-0.5">
                                        <FormLabel>How many dollars do you want to add to the MyBroker balance ?</FormLabel>
                                        <FormDescription>
                                             Your Balance : {user?.credit} $
                                        </FormDescription>
                                    </div>
                                    
                                    <div className="mt-2 sm:mt-0">
                                        <FormControl>
                                        <Input {...field}
                                            placeholder="$$$"
                                            disabled={isPending}
                                            className="text-center"/>
                                        </FormControl>
                                        <FormMessage/>
                                    </div>
                                    
                                </FormItem>
                            )}/>


                        </div>
                        {!success &&<FormError message={error}/>}
                        {!error && <FormSuccess message={success}/>}
                        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">Save</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>

    );
}
 
export default SettingPage;