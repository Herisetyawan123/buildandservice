import Image, { StaticImageData } from "next/image";
import WebDesign from "../../../assets/img/web.png"
import Button from "../Button/Index";
const CardService = ({ title, image, deskripsi }: {
  title: string
  deskripsi: string
  image: StaticImageData
}) => {
  return (
    <div className='bg-white p-10 rounded-xl w-80 flex flex-col gap-y-5 justify-center items-center shadow-md hover:shadow-xl duration-500'>
      <div className="w-56 h-56 relative">
        <Image src={image} alt="" layout={"responsive"} />
      </div>
      <div className="mt-5 text-center w-full">
        <h1 className="font-bold text-2xl text-green-600">{ title }</h1>
        <p className="mt-5 text-gray-700">
          { deskripsi }
        </p>
      </div>
      <div className="w-full">
        <Button link={'/'} className="w-full text-center" color="bg-green-600">More</Button>
      </div>
    </div>
  )
}

export default CardService;