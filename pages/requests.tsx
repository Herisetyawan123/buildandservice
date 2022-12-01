import { useState, useEffect } from "react";
import Button from "../components/Element/Button/Index";
import InputFile from "../components/Element/Input/InputFile";
import InputText from "../components/Element/Input/InputText";
import LayoutApp from "../layouts/Frontend";
import projectFetcher from "../utils/functions/projects-fetcher";

export default function Requests() {
  const [form, setForm] = useState({})
  const [file, setFile] = useState('')

  const inputFileHandler = (e) => {
   setFile(e.currentTarget.files)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('srs', file)
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    if(projectFetcher.addProject(formData)){
      console.log("Berhasil")
      return
    }
    console.log("ok")
    return
  }

  return (
    <>
      <LayoutApp title="Request Project">
        <div className="w-full">
          <div className="w-[90%] sm:max-w-6xl mx-auto py-10">
            <h1 className="text-center text-3xl font-bold">Form Request Project</h1>
            <div className="my-10">
              <h2 className="text-xl font-semibold">Tata Cara dalam pemesan project</h2>
              <p className="text-slate-600 mt-1">Sebelum melakukan pemesanan project alangkah lebih baiknya simak alurnya terlebih dahulu</p>
              <div className="mt-5">
                <ul className="ml-5 text-slate-500 list-disc">
                  <li>Sebelum melakukan pemesanan isi form request terlebih dahulu</li>
                  <li>Kemudian dari pihak kami akan memberikan pesan konfirmasi melalui Whatsapp dari nomer yang telah di masukan di form</li>
                  <li>Setelah itu dari pihak kami akan mengajak client untuk berdiskusi terlebih dahulu</li>
                  <li>Ketika mendapatkan kesepakatan maka kami akan langsung mengeksekusi project</li>
                </ul>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, name: e.target.value}
                })} name="name" placeholder="Junaidi Suparman" label="Nama" />
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, phone: e.target.value}
                })} name="phone" placeholder="628xxxxx" label="Nomor Telephone" />
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, email: e.target.value}
                })} name="email" placeholder="JunaidiSuparman@mail.com" label="Alamat Email" />
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, title: e.target.value}
                })} name="title" placeholder="Membuat website protofolio" label="Judul Project" />
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, description: e.target.value}
                })} name="description" placeholder="Membuat website protofolio" label="Deskripsi Project" />
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, reference: e.target.value}
                })} name="referensi" placeholder="http://xxxxxx" label="Referensi Project (web / app serupa) - (optional)" />
                <InputFile onChange={inputFileHandler} name="srs" label="File SRS (Software Requirement Specification) - (optional)" />
                <Button>Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </LayoutApp>
    </>
  )
}