import Link from "next/link";
import Button from "../../Element/Button/Index";
import Image from "next/legacy/image";
import Logo from "../../../assets/profile/logo.png";

const Navbar = () => {
    return (
        <header className="w-full h-20">
            <nav className="w-[90%] sm:max-w-6xl mx-auto flex h-full items-center font-medium justify-between">
                <Image src={Logo} objectFit={'cover'} height={48} width={68} alt="alt" />
                <div className="flex items-center">      
                    <div className="ml-20 space-x-20 hidden lg:block ">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Source</Link>
                        <Link href={'/'}>Service</Link>
                        <Link href={'/team'}>Our Teams</Link>
                    </div>
                </div>
                <div>
                    <Button link="/requests">Request Project</Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;