"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { UserButton, BalanceButton } from "./button";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const pathname = usePathname() ;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 640) {
            setIsOpen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    return (
        
    <nav className="w-full flex flex-col justify-center sm:flex-row items-center p-4 rounded-xl shadow-sm bg-white">

        {/* Hamburger Menu */}

        <div className="sm:hidden flex items-center justify-between w-full">
            <h1 className="text-black font-bold text-xl">MyBroker</h1>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
        </div>

        {/* Navbar */}

        <div className={`flex justify-center items-center p-4 gap-4 sm:flex flex-col sm:flex-row w-full sm:w-auto ${isOpen ? 'block' : 'hidden'} sm:block gap-y-4`}>
            <h1 className={`text-black font-bold text-xl sm:mr-0 ${!isOpen ? 'block' : 'hidden'}`}>MyBroker</h1>

            <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-4 sm:gap-y-0">

                <Button
                    className="font-bold py-2 px-4 rounded-full"
                    asChild
                    variant={pathname == "/home" ? "default" : "outline"}
                >
                    <Link href="/home">Home</Link>
                </Button>

                <Button
                    className="font-bold py-2 px-4 rounded-full"
                    asChild
                    variant={pathname == "/" ? "default" : "outline"}
                >
                    <Link href="/home">Investment Portfolio</Link>
                </Button>

                <BalanceButton />

                <UserButton />

            </div>
        </div>

    </nav>
  
    );
}