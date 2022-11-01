import type { NextPage } from 'next'
import Button from '../components/Element/Button/Index'
import Navbar from '../components/Parts/Navbar/Index'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
            <title>Hallo dunia</title>
        </Head>
        <Navbar/>
      </div>
    </>
  )
}

export default Home
