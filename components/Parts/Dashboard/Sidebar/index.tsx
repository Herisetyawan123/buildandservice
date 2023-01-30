import Link from "next/link"
import { HiCode, HiCube, HiDatabase, HiOutlineColorSwatch } from "react-icons/hi"
import { FaSignOutAlt } from "react-icons/fa"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Logo from "../../../../assets/profile/logo.png";


const Sidebar = () => {
  return (
      <div className="h-full w-[20vw] bg-white hidden md:block">
          {/* logo */}
          <div className="w-full h-20 flex items-center justify-center px-5 gap-x-3">
              <div className=" h-11 w-11 rounded-full">
                <Image src={Logo} alt="Logo build and service" className="w-full h-full object-contain" />
              </div>
              <h1 className="font-bold text-base text-blue-900">Build And Service</h1>
          </div>
          {/* menu */}
          <div className="h-[80vh] flex flex-col justify-between items-center py-10">
              <div className="w-3/4 mx-auto flex flex-col gap-y-5">
                  <Link href={'/dashboard'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                      <span className="flex items-center gap-x-2"><HiCube size={20} className={"mr-5"}/> <p className="font-medium text-base">Dashboard</p></span>
                  </Link>
                  <Link href={'/dashboard/product'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                      <span className="flex items-center gap-x-2"><HiDatabase size={20} className={"mr-5"}/> <p className="font-medium text-base">Products</p></span>
                  </Link> 
                  <Link href={'/dashboard/service'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                      <span className="flex items-center gap-x-2"><HiOutlineColorSwatch size={20} className={"mr-5"}/> <p className="font-medium text-base">Service</p></span>
                  </Link> 
                  <Link href={'/dashboard/source'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                      <span className="flex items-center gap-x-2"><HiCode size={20} className={"mr-5"}/> <p className="font-medium text-base">Source</p></span>
                  </Link> 
              </div>
              <div>
                  <button className="flex items-center gap-x-3 font-medium bg-blue-300 px-5 py-2 rounded-md text-white" onClick={ () => signOut() }><FaSignOutAlt /> Sign Out</button>
              </div>
          </div>
      </div>
  )
}

export default Sidebar;