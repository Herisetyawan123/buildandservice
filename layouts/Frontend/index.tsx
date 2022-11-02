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
            <div>
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