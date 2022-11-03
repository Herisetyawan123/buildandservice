import { NextPage } from "next";
import { useSession } from "next-auth/react";
import LayoutDash from "../../../layouts/Backend";



const Sale: NextPage = (): JSX.Element => {

  return (
    <LayoutDash>
      <div>
        Ini halaman dashboard  
      </div>
    </LayoutDash>
  )

}

export default Sale;