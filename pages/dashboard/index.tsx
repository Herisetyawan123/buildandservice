import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import LayoutDash from "../../layouts/Backend";



const Home: NextPage = (): JSX.Element => {

  return (
    <LayoutDash>
      <div>
        Ini halaman dashboard  
      </div>
    </LayoutDash>
  )

}

export default Home;