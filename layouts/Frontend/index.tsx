import Head from 'next/head'
import BottomBar from '../../components/Parts/BottomBar'
import Footer from '../../components/Parts/Footer'
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
            <div className='bg-[#f6f8fd] h-screen'>
                <Head>
                    <title>{ title }</title>
                    <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
                </Head>
                <div className='h-[90%] sm:h-full overflow-y-scroll'>
                    <Navbar/>
                    
                    <section className='w-full'>
                        { children }
                    </section>

                    <Footer />
                </div>

                <BottomBar />

            </div>
        )


}

export default LayoutApp