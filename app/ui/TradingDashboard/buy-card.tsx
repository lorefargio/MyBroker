'use client'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "../auth/form-error";
import { FormSuccess } from "../auth/form-success";

import { useForm } from "react-hook-form";
import { useTransition, useState, useContext } from "react";
import { useSession} from "next-auth/react";

import * as z from "zod"
import { BuySchema } from "../../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { Buy } from "../../../actions/buy";
import SymbolContext from "@/context/SymbolContext";
import { BalanceButton } from "../button";
import { useCurrentUser } from "../../../hooks/use-current-user";
import { sendNotification } from "../../../actions/notification";


const BuyCard = ( {price} : {price : number}) => {
    const user = useCurrentUser()
    const SymbolDetails = useContext(SymbolContext) ;
    const {update} = useSession() ;

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition() ;

    const form = useForm<z.infer<typeof BuySchema>>({
      resolver: zodResolver(BuySchema),
      defaultValues : {
        sharesNumber:"",
      },
    }) ;

    const onSubmit = (values: z.infer<typeof BuySchema>) => {
      setError("") ;
      setSuccess("") ;
      startTransition(() => {
        Buy(values,price,SymbolDetails.symbol)
        .then((data : any) => {
            
          if(data?.error) {
            form.reset()
            setError(data.error) ;
          }

          if(data?.success){
            update()
            form.reset()
            setSuccess(data.success) ;
          }
          
        })
          .catch(() => setError("Something went wrong")) ;
      })

    }

    return ( 
        <div className="flex flex-col justify-around h-full w-full mt-2">
            <div className="space-y-4">
                <h1 className="text-xl font-bold">You are looking to Buy : {SymbolDetails.symbol.symbol}</h1>
                <h2 className="mt-4">The Current best price is : {price}</h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit((values : z.infer<typeof BuySchema> ) => onSubmit(values))} className="space-y-6">
                        <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="sharesNumber"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number Of Shares</FormLabel>
                                <FormDescription>
                                  <BalanceButton credit={user?.credit}/>
                                </FormDescription>
                                <FormControl>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        </div>


                        <FormError message={error} />
                        <FormSuccess message={success} />

                        <Button type="submit" className="w-full" disabled={isPending}>
                          Confirm 
                        </Button>
                    </form>
                </Form>
            </div>

        </div>
     );
}
 
export default BuyCard;


