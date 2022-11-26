import { NextPage } from "next";
import { HiOutlineDocumentText, HiShoppingCart, HiUserGroup } from "react-icons/hi";
import LayoutDash from "../../layouts/Backend";



const Source: NextPage = (): JSX.Element => {

  return (
    <LayoutDash>
      <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-5">
        <div className="bg-white flex gap-x-5 items-center hover:shadow rounded-lg p-5 transition duration-300 border group">
          <div className="w-14 h-14 bg-red-300 rounded-full flex justify-center items-center">
            <HiUserGroup color="white" size={25} className="transition group-hover:scale-125 duration-300" />
          </div>
          <div>
            <h2 className="font-semibold text-base">Product</h2>
            <span className="font-light text-lg">5</span>
          </div>
        </div>
        <div className="bg-white flex gap-x-5 items-center hover:shadow rounded-lg p-5 transition duration-300 border group">
          <div className="w-14 h-14 bg-blue-300 rounded-full flex justify-center items-center">
            <HiShoppingCart color="white" size={25} className="transition group-hover:scale-125 duration-300" />
          </div>
          <div>
            <h2 className="font-semibold text-base">User</h2>
            <span className="font-light text-lg">5</span>
          </div>
        </div>
        <div className="bg-white flex gap-x-5 items-center hover:shadow rounded-lg p-5 transition duration-300 border group">
          <div className="w-14 h-14 bg-purple-300 rounded-full flex justify-center items-center">
            <HiOutlineDocumentText color="white" size={25} className="transition group-hover:scale-125 duration-300" />
          </div>
          <div>
            <h2 className="font-semibold text-base">Project</h2>
            <span className="font-light text-lg">5</span>
          </div>
        </div>
        <div className="bg-white flex gap-x-5 items-center hover:shadow rounded-lg p-5 transition duration-300 border group">
          <div className="w-14 h-14 bg-green-300 rounded-full flex justify-center items-center">
            <HiShoppingCart color="white" size={25} className="transition group-hover:scale-125 duration-300" />
          </div>
          <div>
            <h2 className="font-semibold text-base">Orders</h2>
            <span className="font-light text-lg">5</span>
          </div>
        </div>
      </div>
    </LayoutDash>
  )

}

export default Source;