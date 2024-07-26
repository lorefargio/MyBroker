"use client"

import { CardWrapper } from "./card-wrapper"
import {BeatLoader} from "react-spinners"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "../../actions/new-verification"
import { FormError } from "./form-error"
import { FormSuccess } from "./form-success"

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>() ;
    const [success, setSuccess] = useState<string | undefined>() ;


    const searchParams = useSearchParams() ;

    const token = searchParams.get("token")

    const onSubmit = useCallback(() => {

        if(!token){
            setError("Missing token!") ;
            return ;
        }

        newVerification(token)
            .then((data) => {
                setSuccess(data.success) ;
                setError(data.error) ;
            })
            .catch(() => {
                setError("Something went wrong!")
            }) 
    }, [token])

    useEffect(() => {
       onSubmit() ; 
    },[])

    return(
        <CardWrapper title="Confirming your verification" backButtonLabel="Back to login" backButtonHref="/auth/login">
            <div className="flex items-center w-full justify-center">
            {!success && !error && (<BeatLoader/>) }
            <FormSuccess message={success}/>
            {!success && (
                <FormError message={error}/>
            )}
            </div>
        </CardWrapper>
    )
}