import type { NextPage } from "next";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import Button from "../../components/Element/Button/Index";
import Abstrak from "../../assets/bg/abstrak.svg"

const SignUp : NextPage = () : JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  // example request data
  const delay = (time: number) => new Promise((resolve) => {
    setTimeout(() => {
      setLoading(false)
    }, time)
    resolve("ok")
  })

  // TODO: kerjakan disini setalah di submit
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    await delay(1000)
    console.log(newUser)
  }
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-green-100" style={{ backgroundImage: `url(${Abstrak.src})` }}>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl text-center">Sign Up</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block py-2 font-semibold text-lg text-gray-900">name</label>
              <input value={newUser.name} onChange={({target}) => {
                setNewUser({...newUser, name: target.value})
              }} type="text" className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="hendro susanto"/>
            </div>
            <div>
              <label className="block py-2 font-semibold text-lg text-gray-900">email</label>
              <input value={newUser.email} onChange={({target}) => {
                setNewUser({...newUser, email: target.value})
              }} type="email" className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="exampe@mail.com"/>
            </div>
            <div>
              <label className="block py-2 font-semibold text-lg text-gray-900">Password</label>
              <input value={newUser.password} onChange={({target}) => 
                setNewUser({...newUser, password: target.value})
              } type="password" className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="*********"/>
            </div>
            <Button className="w-full hover:bg-blue-800 mt-3 text-center" type="submit" isLoading={loading}>Register</Button>
          </form>
 


          <p className="mt-8 text-xs font-light text-center text-gray-700">Already have account? <span> </span>
              <Link
                  href="/auth/signin"
                  className="font-medium text-gray-600 hover:underline"
              >
                  Sign In
              </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp;