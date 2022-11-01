import Link from "next/link";

const Navbar = () => {
    return (
        <header className="w-full h-20">
            <nav className="max-w-6xl mx-auto flex h-full items-center font-medium">
                <div className="rounded-full bg-blue-500 w-10 h-10"></div>
                <div className="ml-20 space-x-20">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Sale</Link>
                    <Link href={'/'}>Source</Link>
                    <Link href={'/'}>Service</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;