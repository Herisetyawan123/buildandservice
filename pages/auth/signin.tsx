import { NextPage } from "next";

interface Props{}
const SignIn: NextPage = (props): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl text-center">SignIn</h1>
        <form action="">
          <label htmlFor="email" className="block py-4 font-semibold text-lg">email</label>
          <input type="email" className="block w-full bg-slate-800"/>
        </form>
      </div>
    </div>
  )
}

export default SignIn