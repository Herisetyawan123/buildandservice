import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithubAlt, FaLinkedin } from "react-icons/fa";

interface Props{
    image: StaticImageData
    name: string
    description: string
}

const CardTeam = ({ image, name, description } : Props) => {
    return (
        <div className="py-8 w-64 shadow-md rounded-xl bg-white flex flex-col justify-center items-center">
            <div className="bg-blue-300 w-32 h-32 rounded-full relative">
                {/* <Image src={image} layout="fill" alt="" /> */}
            </div>
            <div className="mt-5 text-center mx-5">
                <h1 className="text-gray-900 font-bold text-xl">{ name }</h1>
                <p className="text-slate-700 mt-2 text-sm">{ description }</p>
            </div>
            <div className="mt-10 gap-x-5 flex">
                <Link href={'https://instagram.com/herisetyawan233'} passHref>
                    <FaInstagram size={25} className="text-green-600 hover:text-green-800" />
                </Link>
                <Link href={'https://instagram.com/herisetyawan233'} passHref>
                    <FaGithubAlt size={25} className="text-green-600 hover:text-green-800" />
                </Link>
                <Link href={'https://instagram.com/herisetyawan233'} passHref>
                    <FaLinkedin size={25} className="text-green-600 hover:text-green-800" />
                </Link>
            </div>
        </div>
    )
}

export default CardTeam;