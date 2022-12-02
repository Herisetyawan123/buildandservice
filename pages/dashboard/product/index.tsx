import { NextPage } from "next";
import LayoutDash from "../../../layouts/Backend";
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import DataTable from "../../../components/Element/Table/DataTable"
import { HiPlus } from "react-icons/hi";



const Sale: NextPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const data = [
    {
      title: 'Invitation Wedding',
      category: 'website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consequatur fugit excepturi nobis vel voluptate. Eligendi sequi quo debitis! Quisquam nam rerum optio nisi alias incidunt facilis porro delectus veritatis.',
      price: 'Rp. 150.000,-',
      discount: '-',
    },
    {
      title: 'E-Voting',
      category: 'website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consequatur fugit excepturi nobis vel voluptate. Eligendi sequi quo debitis! Quisquam nam rerum optio nisi alias incidunt facilis porro delectus veritatis.',
      price: 'Rp. 550.000,-',
      discount: '-',
    }
  ]

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

          <DataTable data={data} onSubmit={onSubmit} />

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