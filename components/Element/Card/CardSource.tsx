import Link from "next/link"
import Image from "next/image"
import { FaCartArrowDown } from "react-icons/fa"

interface Props{
    title: string,
    price: string,
    link: string
}

const CardSource = ({ title, price, link } : Props) => {
    return (
        <div className='bg-white p-8 rounded-lg w-[22rem]'>
        <div className='w-full h-40 bg-blue-200 rounded-lg relative'>
          <Image src="https://buildwithangga.com/themes/front/images/thumbnail/thumbnail_roadmap-2.webp" className='w-full h-full object-cover' alt="" layout="fill" />
        </div>  
        <div className='mt-5'>
          <h2 className='text-slate-600 text-xl font-bold break-words'>{ title }</h2>

          <div className='mt-5'>
            <h4 className='text-lg font-normal text-slate-500'>Rp. {price},-</h4>
          </div>

          <div className='mt-5'>
            <Link href={link}>
              <p className='flex items-center justify-center gap-x-5 font-semibold text-lg bg-green-600 px-5 p-2 rounded-lg text-white text-center'>
                <FaCartArrowDown /> Buy
              </p>
            </Link>
          </div>
        </div>
      </div>
    )
}


export default CardSource;
