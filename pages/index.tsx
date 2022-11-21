import type { NextPage } from 'next'
import LayoutApp from '../layouts/Frontend'
import CardSource from '../components/Element/Card/CardSource'
// import { Disclosure } from "@headlessui/react"

const Home: NextPage = () => {
  return (
    <>
      <LayoutApp>
        <div className='max-w-6xl mx-auto py-10'>
          <div>
            <h3 className='font-medium text-green-500 text-lg'>Recommended For You</h3>
            <h1 className='text-slate-600 font-bold text-3xl mt-2'>Pilih sesuai kebutuhan kalian.</h1>
          </div>
          <div className='flex gap-x-3 flex-wrap mt-10 justify-between'>
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            {/* <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' /> */}
          </div>
        </div>

        <div className='max-w-6xl mx-auto py-10'>
          <div>
            <h3 className='font-medium text-green-500 text-lg'>we shall never deny guest even the most ridiculous request.</h3>
            <h1 className='text-slate-600 font-bold text-3xl mt-2'>Our Service</h1>
          </div>
          <div>

          </div>

        </div>
        <div className='max-w-6xl mx-auto py-10'>
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
