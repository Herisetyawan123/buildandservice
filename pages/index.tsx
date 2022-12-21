import type { NextPage } from 'next'
import LayoutApp from '../layouts/Frontend'
import CardSource from '../components/Element/Card/CardSource'
import CardService from '../components/Element/Card/CardService'
import WebDesign from "../assets/img/web.png"
import Mobile from "../assets/img/mobile.png"
import Source from "../assets/img/source.png"
import Abstrak from "../assets/bg/abstrak.svg"
import TabDropdown from '../components/Element/Box/Dropdown'
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

        <section className='bg-[#c8e7df] w-full' style={{ backgroundImage: `url(${Abstrak.src})`}}>
          <div className='w-[90%] sm:max-w-6xl mx-auto py-10'>
            <div className='text-center'>
              <h3 className='font-medium text-green-500 text-lg'>we shall never deny guest even the most ridiculous request.</h3>
              <h1 className='text-slate-600 font-bold text-3xl mt-2'>Our Service</h1>
            </div>
            <div className='mt-5 flex flex-wrap sm:justify-center sm:flex-row sm:gap-x-5 flex-col items-center gap-y-5'>
              <CardService image={WebDesign} title="Web Developer" />
              <CardService image={Mobile} title="Android Developer" />
              <CardService image={Source} title="Source Coding" />
            </div>
          </div>
        </section>

        <div className='w-[90%] sm:max-w-6xl mx-auto py-10'>
          <div>
            <h3 className='font-medium text-green-500 text-lg'>Info lebih lanjut</h3>
            <h1 className='text-slate-600 font-bold text-3xl mt-2'>Frequently Asked Questions</h1>
          </div>
          <div className='mt-10 space-y-5 '>
            {/* <FaQPart /> */}
            <TabDropdown question='Apakah itu build and service ?' answer='Build And Service atau BaS adalah sebuah platform yang melayani jasa tentang IT khususnya programming disini juga menjual berbagai sourcecode, melayani pembuatana software kecil maupun besar dan sebagainya' />
            <TabDropdown question='Bagaimana penggunaannya ?' answer='Untuk penggunaan nya tinggal akses website kami yaitu https://buildandservice.my.id' />
            <TabDropdown question='Bagaimana kualitas yang dihasilkan ?' answer='Kami disini mencoba berusaha mewujudkan ekspektasi customer supaya customer kami puas' />
            <TabDropdown question='Untuk pembuatan software bagaimana pemesanannya ?' answer='Masuk ke halaman website kami terus pencet tombol request project maka disitu akan di arah ke form request project.' />
            <TabDropdown question='Bagaimana alur pemesanan software ?' answer='Pertama pengguna/customer di haruskan mengisi form yang telah disediakan kemudian kami akan mengecek data yang telah diisi, dan pihak kami akan menghubungi by whatsapp dari sini kami akan mengajak customer untuk meet terlebih dahulu jika terjadi kesepakatan kami akan mengeksekusi project nya' />
          </div>
          

        </div>
      </LayoutApp>
    </>
  )
}

export default Home
