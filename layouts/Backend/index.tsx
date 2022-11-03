import { useSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import Router from "next/router"
import { useEffect } from "react"
import { FaCode, FaDashcube, FaSalesforce, FaServicestack, FaSignOutAlt } from "react-icons/fa"

const LayoutDash = ({ children, title = "Dashboard - BuildAndService" }: { children: React.ReactNode, title?: string }) => {

    const {status, data} = useSession()

    useEffect(() => {
        console.log(status)
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
                    <div className="w-full h-[20vh] flex items-center px-5 gap-x-3">
                        <div className="bg-blue-500 h-16 w-16 rounded-full"></div>
                        <h1 className="font-bold text-lg text-blue-900">Build And Service</h1>
                    </div>
                    {/* menu */}
                    <div className="h-[80vh] flex flex-col justify-between items-center py-10">
                        <div className="w-3/4 mx-auto flex flex-col gap-y-5">
                            <Link href={'/dashboard'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                                <span className="flex items-center gap-x-2"><FaDashcube size={30} className={"mr-5"}/> <p className="font-medium text-base">Dashboard</p></span>
                            </Link>
                            <Link href={'/dashboard/sale'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                                <span className="flex items-center gap-x-2"><FaSalesforce size={30} className={"mr-5"}/> <p className="font-medium text-base">Sale</p></span>
                            </Link> 
                            <Link href={'/dashboard/service'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                                <span className="flex items-center gap-x-2"><FaServicestack size={30} className={"mr-5"}/> <p className="font-medium text-base">Service</p></span>
                            </Link> 
                            <Link href={'/dashboard/source'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                                <span className="flex items-center gap-x-2"><FaCode size={30} className={"mr-5"}/> <p className="font-medium text-base">Source</p></span>
                            </Link> 
                        </div>
                        <div>
                            <button className="flex items-center gap-x-3 font-medium bg-blue-300 px-5 py-2 rounded-md text-white"><FaSignOutAlt /> Sign Out</button>
                        </div>
                    </div>
                </div>
                <section className='w-full'>
                    { children }
                </section>
            </main>
        </div>
    )
}

export default LayoutDash