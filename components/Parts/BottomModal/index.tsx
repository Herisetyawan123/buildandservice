import Close from "../../Element/Close"
import LayerBlur from "../LayerBlur"
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { HiCode, HiCube, HiDatabase, HiOutlineColorSwatch, HiUser } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

const scaleUp = keyframes`
    0% { top: 100%;}
    100% { top: 180px;}
 `;

const BoxWhite = styled.div`
  background: white;
  position: fixed;
  top: 180px;
  bottom: -60px;
  left: 0;
  right: 0;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: white;
  padding: 2.5rem 0;
  padding-top: 2.5rem;
  transition: all 0.6s;
  animation-name: ${scaleUp};
  animation-duration: 0.5s;
`;



const BottomModal = ({ click, onClick }) => {
  return (
    <LayerBlur hidden={click}>
      <div className="w-full h-full">
        <BoxWhite>
          <Close onClick={onClick} />
          <hr />
          <div className="flex flex-col m-5 h-full">
            <div className="grid grid-cols-2 gap-2">
              <Link href={'/dashboard'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                  <span className="flex flex-col justify-center items-center gap-y-2">
                    <HiCube size={20} className={"text-center5"}/>
                    <p className="font-medium text-base">Dashboard</p>
                  </span>
              </Link>
              <Link href={'/dashboard/product'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                  <span className="flex flex-col justify-center items-center gap-y-2">
                    <HiDatabase size={20} className={"text-center5"}/>
                    <p className="font-medium text-base">Products</p>
                  </span>
              </Link> 
              <Link href={'/dashboard/service'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                  <span className="flex flex-col justify-center items-center gap-y-2">
                    <HiOutlineColorSwatch size={20} className={"text-center5"}/> 
                    <p className="font-medium text-base">Service</p>
                  </span>
              </Link> 
              <Link href={'/dashboard/source'} className={'text-blue-900 px-3 py-2 inline-block hover:bg-blue-400 w-full rounded-md transition-all duration-300 hover:text-white'}>
                  <span className="flex flex-col justify-center items-center gap-y-2">
                    <HiCode size={20} className={"text-center"}/> 
                    <p className="font-medium text-base">Source</p>
                  </span>
              </Link> 
              
            </div>
            <div className="mt-10 w-full">
                <button className="flex justify-center items-center gap-x-3 w-full font-medium bg-blue-500 px-5 py-2 rounded-md text-white"><HiUser /> Profile</button>
            </div>
            <div className="mt-5 w-full">
                <button className="flex justify-center items-center gap-x-3 w-full font-medium bg-red-300 px-5 py-2 rounded-md text-white" onClick={ () => signOut() }><FaSignOutAlt /> Sign Out</button>
            </div>
          </div>
        </BoxWhite>
      </div>
    </LayerBlur>

  )
}

export default BottomModal;