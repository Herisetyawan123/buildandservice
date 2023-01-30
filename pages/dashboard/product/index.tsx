import { NextPage } from "next";
import LayoutDash from "../../../layouts/Backend";
import { useState, useEffect } from "react"
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import SkeletonTable from "../../../components/Element/SkeletonTable/SkeletonTable";
import axios from "axios";
import Image from "next/image";



const Sale: NextPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([])
  // const data = [
  //   {
  //     title: 'Invitation Wedding',
  //     category: 'website',
  //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consequatur fugit excepturi nobis vel voluptate. Eligendi sequi quo debitis! Quisquam nam rerum optio nisi alias incidunt facilis porro delectus veritatis.',
  //     price: 'Rp. 150.000,-',
  //     discount: '-',
  //   },
  //   {
  //     title: 'E-Voting',
  //     category: 'website',
  //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consequatur fugit excepturi nobis vel voluptate. Eligendi sequi quo debitis! Quisquam nam rerum optio nisi alias incidunt facilis porro delectus veritatis.',
  //     price: 'Rp. 550.000,-',
  //     discount: '-',
  //   }
  // ]

  const fetchData = () => {
    axios.get("/api/products").then((res) => {
      setData(res.data.products)
      setLoading(false)
      console.log(res.data.products)
    });
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log("ok")
  }

  return (
    <LayoutDash>
      <Card bgColor="white">
        <CardHeader>
          <Flex justify={"space-between"} align={"center"}>
            <Heading size='md'>Semua Product</Heading>
            <Button onClick={onOpen} colorScheme={'linkedin'}>
              <HiPlus className="mr-3" />
              Tambah
            </Button>
          </Flex>
        </CardHeader>
        <CardBody>

        <CardBody>
            {
              isLoading ?
              <SkeletonTable />
              : (

                <TableContainer>
                  <Table variant='simple' borderRadius={10} overflow={'hidden'}>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead className="bg-slate-100">
                      <Tr>
                        <Th>name</Th>
                        <Th>harga</Th>
                        <Th>kategori</Th>
                        <Th>thumbnail</Th>
                        <Th>diskon</Th>
                      
                        <Th>action</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {
                        data.map((item, index) => (
                          <Tr key={index}>
                            <Td>{ item.name }</Td>
                            <Td>{ item.price }</Td>
                            <Td>{ item.categories.type }</Td>
                            <Td>
                              <Image src={item.thumbnail} width={100} height={80} alt="Thumbnail" />
                            </Td>
                            <Td>{ item.discount ? item.discount : "Tidak ada diskoun" }</Td>

                            
                            <Td>
                              <Button colorScheme={'messenger'} onClick={() => {}}>
                                detail
                              </Button>
                            </Td>
                          </Tr>
                        ))
                      }
                    </Tbody>
                  </Table>
                </TableContainer>
                // <DataTable data={data} onSubmit={() => {}} />
              )
            }

            </CardBody>

        </CardBody>
        <CardFooter>
          
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl className="mt-3">
              <FormLabel>Title</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl className="mt-3">
              <FormLabel>Price</FormLabel>
              <Input type='number' />
            </FormControl>
            <FormControl className="mt-3">
              <FormLabel>Discount</FormLabel>
              <Input type='number' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme={'green'}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LayoutDash>
  )

}

export default Sale;