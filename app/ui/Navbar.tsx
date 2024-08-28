"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { UserButton, BalanceButton } from "./button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import {Menu} from "lucide-react"


export const Navbar = () => {
    const pathname = usePathname() ;


    return (
        <header className="w-full bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <h1 className="text-2xl font-bold" >
          MyBroker
        </h1>
        <nav className="hidden items-center gap-4 md:flex">

            <Button
                className="font-bold py-2 px-4 rounded-full"
                asChild
                variant={pathname == "/home" ? "default" : "outline"}>

                    <Link href="/home"
                     className="px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                     prefetch={false}>
                    Home
                    </Link>

            </Button>

            <Button 
                className="font-bold py-2 px-4 rounded-full"
                asChild
                variant={pathname == "/portfolio" ? "default" : "outline"}>

                    <Link
                    href="/portfolio"
                    className="px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Portfolio
                    </Link>

            </Button>

            <Button 
                className="font-bold py-2 px-4 rounded-full"
                asChild
                variant={pathname == "/trade" ? "default" : "outline"}>

                    <Link
                    href="/trade"
                    className="px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Trade
                    </Link>

            </Button>

            <UserButton/>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">

                <Button
                    className="font-bold py-2 px-4 rounded-full"
                    asChild
                    variant={pathname == "/home" ? "default" : "outline"}
                >
                    <Link
                    href="/home"
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    >
                        Home
                    </Link>
                </Button>

                <Button
                        className="font-bold py-2 px-4 rounded-full"
                        asChild
                        variant={pathname == "/portfolio" ? "default" : "outline"}
                >
                        <Link
                        href="/portfolio"
                        className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                        >
                            Portfolio
                        </Link>
                </Button>

                <Button
                        className="font-bold py-2 px-4 rounded-full"
                        asChild
                        variant={pathname == "/trade" ? "default" : "outline"}
                >
                        <Link
                        href="/trade"
                        className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                        >
                            Trade
                        </Link>
                </Button>


                <div className="flex justify-center">
                  <UserButton/>
                </div>
              
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>

    );
}