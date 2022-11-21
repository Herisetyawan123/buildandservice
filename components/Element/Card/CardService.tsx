import Image from "next/image";
import WebDesign from "../../../assets/img/web.png"
import Button from "../Button/Index";
const CardService = () => {
  return (
    <div className='bg-white p-10 rounded-xl w-80 flex flex-col gap-y-5 justify-center items-center shadow-md hover:shadow-xl duration-500'>
      <div className="w-56 h-56 relative">
        <Image src={WebDesign} alt="" layout={"responsive"} />
      </div>
      <div className="mt-5 text-center w-full">
        <h1 className="font-bold text-2xl text-green-600">Web Developer</h1>
        <p className="mt-5 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore doloribus consequatur officia illum necessitatibus</p>
      </div>
      <div className="w-full">
        <Button link={'/'} className="w-full text-center" color="bg-green-600">More</Button>
      </div>
    </div>
  )
}

export default CardService;