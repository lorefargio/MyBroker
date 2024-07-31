'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { signOut } from "next-auth/react";

import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar"
import { FaUser } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Cog, Banknote } from "lucide-react";
import { useCurrentUser } from "../../hooks/use-current-user";

interface BackButtonProps {
    href: string ;
    label: string ;
};

export const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
    return (
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({children} : LogoutButtonProps) => {
    const onClick = () => {
        signOut()
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}

interface SettingsButtonProps {
    children?: React.ReactNode;
};

export const SettingsButton = ({children}: SettingsButtonProps) => {
    
    return (
        <Link href="/settings">
            {children}
        </Link>
    )
}

export const UserButton = () => {
    const user = useCurrentUser() ;
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                 <AvatarImage src={user?.image || ""}/>
                 <AvatarFallback>
                    <FaUser/>
                </AvatarFallback>   
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                
                <SettingsButton>
                    <DropdownMenuItem>
                            <Cog  className="h-4 w-4 mr-2"/>
                            Settings
                    </DropdownMenuItem>
                </SettingsButton>

                <LogoutButton>
                    <DropdownMenuItem>
                        <RxExit className="h-4 w-4 mr-2"/>
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export const BalanceButton = () => {
    const user = useCurrentUser() ;
    return (
        <div className="flex self-center gap-3">
            <Banknote/>
            <p className="font-bold">Balance : </p> {user?.credit} $
        </div>
    );
}