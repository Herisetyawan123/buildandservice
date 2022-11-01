import Head from "next/head"
import Navbar from "../../Parts/Navbar/Index"

interface Props{
    children : React.ReactNode
}
const LayoutApp = ({ children }: Props) =>{
    return (
        <div>
            <Head>
                <title>Hallo dunia</title>
            </Head>
            <body>
                <Navbar />
                {children}
            </body>
        </div>
    )
}
export default LayoutApp