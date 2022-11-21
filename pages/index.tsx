import type { NextPage } from 'next'
import LayoutApp from '../layouts/Frontend'
import CardSource from '../components/Element/Card/CardSource'
import CardService from '../components/Element/Card/CardService'
// import { Disclosure } from "@headlessui/react"

const Home: NextPage = () => {
  return (
    <>
      <LayoutApp>
        <div className='w-[90%] sm:max-w-6xl mx-auto py-10'>
          <div>
            <h3 className='font-medium text-green-500 text-lg'>Recommended For You</h3>
            <h1 className='text-slate-600 font-bold text-3xl mt-2'>Pilih sesuai kebutuhan kalian.</h1>
          </div>
          <div className='flex gap-x-3 flex-wrap mt-10 gap-y-10 justify-center sm:justify-start'>
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            {/* <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' /> */}
          </div>
        </div>

        <section className='bg-[#c8e7df] w-full'>
          <div className='w-[90%] sm:max-w-6xl mx-auto py-10'>
            <div className='text-center'>
              <h3 className='font-medium text-green-500 text-lg'>we shall never deny guest even the most ridiculous request.</h3>
              <h1 className='text-slate-600 font-bold text-3xl mt-2'>Our Service</h1>
            </div>
            <div className='mt-5 flex flex-wrap sm:justify-center sm:flex-row sm:gap-x-5 flex-col items-center gap-y-5'>
              <CardService />
              <CardService />
              <CardService />
            </div>
          </div>
        </section>

        <div className='w-[90%] sm:max-w-6xl mx-auto py-10'>
          <div>
            <h3 className='font-medium text-green-500 text-lg'>Info lebih lanjut</h3>
            <h1 className='text-slate-600 font-bold text-3xl mt-2'>Frequently Asked Questions</h1>
          </div>
          <div>
            {/* <FaQPart /> */}
          </div>

        </div>
      </LayoutApp>
    </>
  )
}

export default Home
