import { useState, useEffect } from 'react';
import Loading from "../../components/Element/Modal/Loading";
import Abstrak from "../../assets/bg/abstrak.svg"
import Button from '../../components/Element/Button/Index';
import axios from "axios"
import FailedModal from '../../components/Element/Modal/FailedModal';
import { RiSendPlaneFill } from 'react-icons/ri';

const Remember = () => {
  const [loading, setLoading] = useState(false)
  const [fail, setFail] = useState('')
  const [success, setSuccess] = useState(false)
  const [input, setInput] = useState({password: '', confirm: ''})
  const [count, setCount] = useState(10); 

  useEffect(() => {
    if(success){
      setTimeout(() => {
        setCount((prevState) => prevState != 0 ? prevState - 1 : prevState)
      }, 1000)
      if(count == 0){
        setSuccess(false)
        setCount(10)
      }
    }
  }, [count, success])
  
  const checkEmailExist = async () => {
    try {
      setLoading(true)
      const response = await axios({
        method: "POST",
        url: "/api/forgot",
        headers: {
          "Content-Type" : "application/json"
        },
        data: {
          input
        }
      })
      setLoading(false)
      if(response.status == 200){
        setSuccess(true)
      }
    
    } catch (error) {
      setFail(error.response.data.message)
      setLoading(false)
    }
    return true 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    checkEmailExist()
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-green-100" style={{ backgroundImage: `url(${Abstrak.src})` }}>
    <div className="w-[80%] p-6 m-auto mx-auto bg-white rounded-md shadow-xl sm:max-w-xl">
        {
          success ?
          <>
            <RiSendPlaneFill className='text-green-600 text-6xl mx-auto' />
            <h2 className="text-2xl text-center mt-2">Email Berhasil dikirim</h2>
            <p className='mt-4 text-center'>Silahakan check email, kami telah mengirim link untuk merubah sandi.</p>
            <p className='text-center text-gray-600'>page will be push replace to before page at <span className='font-medium'>{count}</span> second</p>
          </>
          :
          <>
          <h2 className="text-3xl text-center">Setting ulang password</h2>
         
          <div className="flex mt-5 gap-x-2">
            <form onSubmit={handleSubmit} className="w-full">
              <div className='w-full'>
                <div className='mb-5'>
                  <label>Masukan Password</label>
                  <input value={input.password} onChange={(e) => setInput(() => {
                    return {...input, password: e.target.value}
                  }
                  )} type="password" className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="*******"/>
                </div>
                <div>
                  <label>Konfirmasi Password</label>
                  <input value={input.confirm} onChange={(e) => setInput(() => {
                    return {...input, confirm: e.target.value}
                  })} type="password" className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="*******"/>
                </div>
              </div>
              <div className='flex justify-center mt-5'>
                <Button>Submit</Button>
              </div>
            </form>
          </div>
          </>
        }
    </div>
    <Loading show={loading} />
    <FailedModal show={fail != ''} error={fail} onClick={() => {
      setFail('')
    }} />
  </div>
  )
}

export default Remember;