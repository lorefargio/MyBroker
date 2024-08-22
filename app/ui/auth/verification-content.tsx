import { useState, useCallback, useEffect } from "react";
import { newVerification } from "../../../actions/new-verification"
import { Loader } from "../loader";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";

interface VerificationContentProps {
    token : string
}

const VerificationContent = ({token} : VerificationContentProps) => {
    const [error, setError] = useState<string | undefined>() ;
    const [success, setSuccess] = useState<string | undefined>() ;


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
    },[onSubmit])

    return (
        <div className="flex items-center w-full justify-center">
            {!success && !error && <Loader/>}
            <FormSuccess message={success}/>
            {!success && (
                <FormError message={error}/>
            )}
        </div>
    );
} 
export default VerificationContent;