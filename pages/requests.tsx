import type { NextPage } from "next";
import Button from "../components/Element/Button/Index";
import CardRequest from "../components/Element/Card/CardRequest";
import InputFile from "../components/Element/Input/InputFile";
import InputText from "../components/Element/Input/InputText";
import LayoutApp from "../layouts/Frontend";

export default function Requests(){
  return (
    <>
      <LayoutApp title="Request Project">
        {/* <div className="w-full">
          <div className="w-[90%] sm:max-w-6xl mx-auto py-10">
            <h2 className="text-3xl font-semibold">Tata Cara dalam pemesan project</h2>
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
        </div> */}
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
              <form>
                <InputText name="name" placeholder="Junaidi Suparman" label="Nama" />
                <InputText name="phone" placeholder="628xxxxx" label="Nomor Telephone" />
                <InputText name="email" placeholder="JunaidiSuparman@mail.com" label="Alamat Email" />
                <InputText name="title" placeholder="Membuat website protofolio" label="Judul Project" />
                <InputText name="description" placeholder="Membuat website protofolio" label="Deskripsi Project" />
                <InputText name="referensi" placeholder="http://xxxxxx" label="Referensi Project (web / app serupa) - (optional)" />
                <InputFile name="srs" label="File SRS (Software Requirement Specification) - (optional)" />
                <Button>Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </LayoutApp>
    </>
  )
}