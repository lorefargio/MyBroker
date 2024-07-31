import Link from "next/link";

export default function Page() {
  return (
  
    <div className="flex min-h-[100dvh] flex-col">

      <main className="flex-1 bg-muted">

        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-40 px-4 py-12 sm:px-4 lg:px-8">

          <div className="mx-auto my-auto max-w-2xl space-y-6 text-center mt-20 ">
            <h1 className="text-6xl font-bold tracking-tight text-foreground">Welcome to MyBroker</h1>
            <p className="text-xl text-muted-foreground">Discover the best investment opportunities.</p>

            <div className="flex justify-center space-x-4">
              <Link
                href="/auth/login"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors 
                hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Log In
              </Link>
              <Link
                href="/auth/register"
                className="inline-flex items-center rounded-md bg-background px-6 py-3 text-base font-medium text-foreground shadow-sm transition-colors 
                hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                prefetch={false}
              >
                Create a new Account 
              </Link>
            </div>

          </div>
          <div className="text-lg text-muted-foreground space-y-4">
            <p>MyBroker is a web application developed by Fargione Lorenzo, a Computer Science student at the University of Pisa.</p>
            <p>It combines the knowledge gained from his web application development classes with his passion for personal finance.</p> 
          </div>
        </div>

      </main>
    </div>
  )
}

