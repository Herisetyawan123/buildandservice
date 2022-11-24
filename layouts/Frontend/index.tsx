import Head from 'next/head'
import Navbar from '../../components/Parts/Navbar/Index'

const LayoutApp = (
    {
        children,
        title = "Build And Service",
    }:{
        children: React.ReactNode,
        title?: string
    }
    )=>{
        return (
            <div className='bg-[#f6f8fd]'>
                <Head>
                    <title>{ title }</title>
                </Head>
                <Navbar/>
                <section className='w-full'>
                    { children }
                </section>

                <footer className='bg-green-100 py-20 w-full'>
                    <div className='w-[90%] sm:max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                        <div>
                            <h1 className='text-lg font-bold'>Service</h1>
                            <ul className='text-sm space-y-2 mt-5 text-gray-600'>
                                <li>Mobile Developer</li>                  
                                <li>Web Developer</li>                  
                                <li>Source Code</li>                  
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>Our Teams</h1>
                            <ul className='text-sm space-y-2 mt-5 text-gray-600'>
                                <li>Heri Setyawan</li>                  
                                <li>Perdana Putro H</li>                  
                                {/* <li>Source Code</li>                   */}
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>Programming</h1>
                            <ul className='text-sm space-y-2 mt-5 text-gray-600'>
                                <li>Javascript</li>                  
                                <li>Node Js</li>                  
                                <li>Php</li>                  
                                <li>Dart</li>                  
                                <li>Golang</li>                  
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>Frameworks</h1>
                            <ul className='text-sm space-y-2 mt-5 text-gray-600'>
                                <li>React JS, Next JS</li> 
                                <li>Express</li>                 
                                <li>Nest JS</li>                  
                                <li>Laravel</li>                  
                                <li>Flutter</li>                  
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )


}

export default LayoutApp