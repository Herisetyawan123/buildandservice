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
            </div>
        )


}

export default LayoutApp