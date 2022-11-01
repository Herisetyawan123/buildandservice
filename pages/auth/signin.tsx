import { NextPage } from "next";
import Button from "../../components/Element/Button/Index";

interface Props{}
const SignIn: NextPage = (props): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl text-center">SignIn</h1>
        <form action="" className="mt-6" onSubmit={()=>console.log('Ok')}>
          <div>
            <label htmlFor="email" className="block py-2 font-semibold text-lg text-gray-900">email</label>
            <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div>
            <label htmlFor="password" className="block py-2 font-semibold text-lg text-gray-900">Password</label>
            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="w-full mt-6">
          <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn