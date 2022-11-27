import { useSession } from "next-auth/react"
import Head from "next/head"

import Router from "next/router"
import { useEffect, useState } from "react"
import { HiSearch } from "react-icons/hi"
import Burger from "../../components/Element/Burger"
import Close from "../../components/Element/Close"
import BottomModal from "../../components/Parts/BottomModal"
import Sidebar from "../../components/Parts/Dashboard/Sidebar"
import LayerBlur from "../../components/Parts/LayerBlur"

const LayoutDash = ({ children, title = "Dashboard - BuildAndService" }: { children: React.ReactNode, title?: string }) => {
    const [click, setClick] = useState(false);
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
                <Sidebar />
                <section className='w-full'>
                    {/* navbar */}
                    <div className="bg-white h-20 flex justify-between sm:justify-end items-center px-5 sm:px-20 shadow ">
                        <div className="block sm:hidden">
                            <Burger click={click} onClick={() => setClick((prevState) => !prevState)} />
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

            <BottomModal click={click} onClick={() => setClick((prevState) => !prevState)} />
            {/* <Loading show={loading} /> */}
        </div>
    )
}

export default LayoutDash