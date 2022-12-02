import { useState, useEffect } from "react";
import Button from "../components/Element/Button/Index";
import InputFile from "../components/Element/Input/InputFile";
import InputText from "../components/Element/Input/InputText";
import SelectInput from "../components/Element/Input/SelectInput";
import type { ListSelect } from "../components/Element/Input/SelectInput";
import LayoutApp from "../layouts/Frontend";
import projectFetcher from "../utils/functions/projects-fetcher";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, useToast } from "@chakra-ui/react";
import Loading from "../components/Element/Modal/Loading";

export default function Requests() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [form, setForm] = useState({
    "name": "",
    "phone": "",
    "title_project": "",
    "type_poject": "-",
    "description": "",
    "reference": "",
    // "estimation": "",
    "range_min_fee": "",
    "range_max_fee": "",
  });
  const toast = useToast()
  const [file, setFile] = useState('')
  const [mError, setMerror] = useState([])
  const [loading, setLoading] = useState(false)

  const data: ListSelect[] = [
    {
      key: "Website",
      value: "Website"
    },
    {
      key: "Mobile",
      value: "Mobile"
    },
    {
      key: "GUI",
      value: "GUI"
    },
  ]

  const inputFileHandler = (e) => {
   setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let error = []
    try {
      if(form.name == "") {
        error.push({
          name: "Nomor Phone harap di isi",
        })
      }
      if(form.type_poject == "-") {
        error.push({
          type_project: "Nama harap di isi",
        })
      }
      if(form.description == "") {
        error.push({
          description: "Description harap di isi",
        })
      }
      if(form.range_max_fee == "") {
        error.push({
          range_max_fee: "range max fee harap di isi",
        })
      }
      if(form.range_min_fee == "") {
        error.push({
          range_min_fee: "range min fee harap di isi",
        })
      }
      if(form.reference == "") {
        error.push({
          reference: "range min fee harap di isi",
        })
      }
      if(file == "") {
        error.push({
          srs: "File Requirement Project harap di isi",
        })
      }
      setMerror(error)
      if(error.length == 0){
        setLoading(true)
        const formData = new FormData();
        formData.append('srs', file)
        Object.entries(form).forEach(([key, value]) => {
          formData.append(key, value as string);
        });
        const res = await projectFetcher.addProject(formData)
        if(res.status == 201){
          toast({
            title: 'Request Project Added.',
            description: "We'll be execute your project.",
            position: 'top-right',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }else{
          throw "Terjadi kesalahan"
        }
        setLoading(false)
      }else{
        onOpen()
      }
      
    } catch (error) {
      console.log(error)
    }
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
                <SelectInput data={data} onChange={(e) => setForm((prevState) => {
                  return {...prevState, type_poject: e.target.value}
                })} name="type" placeholder="website | mobile | GUI | CLI" label="Type Project" />
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, title_project: e.target.value}
                })} name="title" placeholder="Membuat website protofolio" label="Judul Project" />
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, description: e.target.value}
                })} name="description" placeholder="Membuat website protofolio" label="Deskripsi Project" />
                <InputText type="number" onChange={(e) => setForm((prevState) => {
                  return {...prevState, range_min_fee: e.target.value}
                })} name="fee_min" placeholder="fee min" label="fee min" />
                <InputText type="number" onChange={(e) => setForm((prevState) => {
                  return {...prevState, range_max_fee: e.target.value}
                })} name="fee_max" placeholder="fee max" label="fee max" />
                <InputText onChange={(e) => setForm((prevState) => {
                  return {...prevState, reference: e.target.value}
                })} name="referensi" placeholder="http://xxxxxx" label="Referensi Project (web / app serupa)" />
                <InputFile onChange={inputFileHandler} name="srs" label="File SRS (Software Requirement Specification)" />
                <Button>Submit</Button>
              </form>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Error Input</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Harap diisi semua inputan, yang di wajibkan!</p>
            </ModalBody>

            <ModalFooter>
              <Button color="bg-red-500" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Loading show={loading} />
      </LayoutApp>
    </>
  )
}