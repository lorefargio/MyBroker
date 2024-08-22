"use client"

import { CardWrapper } from "../card-wrapper"
import { Suspense} from "react"
import VerificationContent from "./verification-content"
import { Loader } from "../loader"
import { SearchParamsProvider } from "../SearchParamsProvider"

export const NewVerificationForm = () => {


    return(
        <CardWrapper title="Confirming your verification" backButtonLabel="Back to login" backButtonHref="/auth/login">
            <Suspense fallback={<Loader/>}>
                <SearchParamsProvider>
                        {(token) => <VerificationContent token={token} />}
                </SearchParamsProvider>
            </Suspense>
        </CardWrapper>
    )
}