import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";



const Home: NextPage = (): JSX.Element => {
  const {status, data} = useSession();
  useEffect(() => {
    if (status == 'unauthenticated') Router.replace('/auth/signin')
  }, [status])
  if (status == 'authenticated') {
    return (
      <div>
        Ini halaman dashboard
        <p>{JSON.stringify(data.user?.name)}</p>     
      </div>
    )
  }
  return (
    <div>Loading</div>
  )
}

export default Home;