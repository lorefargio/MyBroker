import Link from "next/link";
export default function NameHeader() {
    return (
        <header className="bg-background px-4 py-3 shadow sm:px-6 lg:px-8">
            <div className="container mx-auto flex items-center justify-between">
            <Link className="text-xl font-bold" href="/">MyBroker</Link>
            </div>
        </header>
    );
}

