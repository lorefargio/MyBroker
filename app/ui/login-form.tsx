'use client'

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
    //const [errorMessage, dispatch] = useFormState(undefined,undefined) ;
    return (
        <form className="space-y-6" action="#" method="POST">
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                className="block w-full rounded-md border-0 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="block w-full rounded-md border-0 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
            <div>
                <LoginButton/>
            </div>
          </form>
    )
}

function LoginButton() {
    const {pending} = useFormStatus() ;
    return (
      <Button className="mt-4 w-full hover:opacity-80 text-white font-bold py-2 px-4 rounded" aria-disabled={pending}>
        Log in
      </Button>
    );
}