import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import supabase from "../../../utils/supabase-service";

const nc = nextConnect()
nc.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {    
    const { email } = req.body
    if(!email){
      return res.status(402).json({
        message: "Email tidak boleh kosong."
      })
    }
    const { data } = await supabase.from('profiles').select("*").eq('email', email).single()
    if(!data){
      return res.status(403).json({
        message: "Email tidak ada, silahkan register terlebih dahulu"
      })
    }
    return res.status(200).json({
      message: "Berhasil terkirim"
    })
  } catch (error) {
   return res.status(500).json({
    message: "Internal Server Error"
   }) 
  }
})

export default nc;