"use-client"; 

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";

import { Social } from "./auth/social";
import { BackButton } from "./button";

interface CardWrapperProps {
    children: React.ReactNode;
    title: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    title,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps ) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <h1 className="text-xl font-bold">{title}</h1>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social></Social>
                </CardFooter>
            )}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref}/>
            </CardFooter>
        </Card>
    )
}