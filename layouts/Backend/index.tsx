import { useSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import Router from "next/router"
import { useEffect, useState } from "react"
import { FaSignOutAlt } from "react-icons/fa"
import { HiCode, HiCube, HiDatabase, HiOutlineColorSwatch, HiSearch } from "react-icons/hi"
import { signOut } from "next-auth/react"
import Loading from "../../components/Element/Modal/Loading"
import Burger from "../../components/Element/Burger"

const LayoutDash = ({ children, title = "Dashboard - BuildAndService" }: { children: React.ReactNode, title?: string }) => {

    const {status, data} = useSession()
    const [loading, setLoading] = useState(false) 
    useEffect(() => {
        // console.log(status)
        // if(status == 'loading') setLoading((prevState) => !prevState)
        // if(status == 'authenticated') setLoading((prevState) => !prevState)
        if (status == 'unauthenticated') Router.replace('/auth/signin')
    }, [status])

    return (
        <div>
            <Head>
                <title>{ title }</title>
            </Head>
            
            <main className="flex bg-blue-50 h-[100vh]">
                {/* sidebar */}
                <div className="w-96 h-full bg-white sticky hidden sm:block">
                    {/* logo */}
                    <div className="w-full h-20 flex items-center px-5 gap-x-3">
                        <div className="bg-blue-500 h-11 w-11 rounded-full"></div>
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
                <section className='w-full'>
                    {/* navbar */}
                    <div className="bg-white h-20 flex justify-between items-center px-5 sm:px-20 shadow ">
                        <div className="">
                            <Burger />
                        </div>
                        <div className="flex gap-x-2 justify-end items-center">
                            <div className="relative sm:mr-10">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Search" className="outline outline-gray-600 outline-1 rounded-3xl focus:ring-2 focus:ring-blue-500 px-4 sm:px-8 py-2" />
                                    <button className="absolute right-4 top-[25%] w-5 h-5 flex justify-center items-center">
                                        <HiSearch size={20} />
                                    </button>
                                </form>
                            </div>
                            {/* <div className="hidden sm:flex items-center gap-x-2">
                                <div className="bg-blue-400 rounded-full w-10 h-10"></div>
                                <h3 className="text-lg font-semibold">Heri Setyawan</h3>
                            </div> */}
                      
                        </div>
                        
                    </div>
                    
                    <div className="py-10 px-5 sm:px-20">
                        { children }
                    </div>
                </section>
            </main>
            {/* <Loading show={loading} /> */}
        </div>
    )
}

export default LayoutDash