import Link from "next/link";
import Button from "../../Element/Button/Index";
import { signIn } from "next-auth/react";

const Navbar = () => {
    return (
        <header className="w-full h-20">
            <nav className="max-w-6xl mx-auto flex h-full items-center font-medium justify-between">
                <div className="flex items-center">
                    <div className="rounded-full bg-blue-500 w-12 h-12 mx-10"></div>
                    <div className="ml-20 space-x-20 hidden sm:block">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Sale</Link>
                        <Link href={'/'}>Source</Link>
                        <Link href={'/'}>Service</Link>
                        <Link href={'/team'}>Our Teams</Link>
                    </div>
                </div>
                <div>
                    <Button onClick={() => signIn() }>Login</Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;