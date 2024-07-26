import { CardWrapper } from "./card-wrapper";
import {TriangleAlert} from 'lucide-react'

export const ErrorCard = () => { 
    return ( 
        <CardWrapper title="Oops! Something went wrong!" backButtonHref="/login" backButtonLabel="Back to Login">
            <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-destructive justify-center'>
                <TriangleAlert className='h-4 w-4'></TriangleAlert>
            </div>
        </CardWrapper>
    );
}