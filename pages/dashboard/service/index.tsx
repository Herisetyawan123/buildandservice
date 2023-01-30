import { Badge, Box, Button, Card, CardBody, CardHeader, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,  Stack,  Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure, VStack } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState, MouseEventHandler } from "react";
import { FaEye } from "react-icons/fa";
import SkeletonTable from "../../../components/Element/SkeletonTable/SkeletonTable";
import { Projects } from "../../../data/interfaces/projects/projects_interfaces";
import LayoutDash from "../../../layouts/Backend";

const Service: NextPage = (): JSX.Element => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState<Projects[]>([]);
  const [item, setItem] = useState<Projects>({} as Projects);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true)
    axios.get('/api/projects').then((response) => {
      const { data, status } = response;
      if (status == 200){
        setData(data.request_projects)
      }else{
        setData([]);
      }
      setLoading(false);
    });
  }

  const detailFetch = (item : Projects) => {
    setItem(item);
    onOpen()
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutDash>
      <div className="w-full bg-blue-400">
        <Card background={'white'}>
          <CardHeader>
            <Text fontSize={'2xl'} fontWeight={'medium'}>
              Daftar pesanan
            </Text>
          </CardHeader>
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
                      <Th>judul</Th>
                      <Th>phone</Th>
                      <Th>tipe</Th>
                      <Th>referensi</Th>
                      <Th>estimasi</Th>
                      <Th>fee</Th>
                      <Th>status</Th>
                      <Th>action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      data.map((item, index) => (
                        <Tr key={index}>
                          <Td>{ item.title_project.substring(0, 30) }...</Td>
                          <Td>{ item.phone }</Td>
                          <Td>{ item.type_project }</Td>
                          <Td>
                            {
                              item.reference == null ?
                                <span>Tidak ada referensi</span>
                              :
                                <Link href={`${item.reference}`} target={'_blank'} passHref className="text-blue-500 font-bold flex flex-col gap-y-1 justify-center items-center w-full">
                                    <FaEye />referensi 
                                </Link>
                            }
                         
                          </Td>
                          <Td>
                            { item.estimation == null ? "Tidak ada" : item.estimation }
                          </Td>
                          <Td>
                            { `${item.range_min_fee} - ${item.range_max_fee}` }
                          </Td>
                          <Td>
                            <Badge colorScheme={ item.status == "Pending" ? 'yellow' : 'green'}>
                              { item.status }
                            </Badge>
                          </Td>
                          <Td>
                            <Button colorScheme={'messenger'} onClick={() => detailFetch(item)}>
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
        </Card>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detail Projects</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align={'start'}>
              <Box>
                <Heading as="h2" size={'xs'} className="text-lg font-bold">Nama :</Heading>
                <p>{ item.name }</p>
              </Box>
              <Box className="text-left">
                <Heading as="h2" size={'xs'} className="text-lg font-bold">Phone :</Heading>
                <p>
                  <Link href={`https://wa.me/${item.phone}`} target={'_blank'}>
                    { item.phone }
                  </Link>
                </p>
              </Box>
              <Box>
                <Heading as="h2" size={'xs'} className="text-lg font-bold">Title :</Heading>
                <p>{ item.title_project }</p>
              </Box>
              <Box>
                <Heading as="h2" size={'xs'} className="text-lg font-bold">Description :</Heading>
                <p>{ item.description }</p>
              </Box>
              <Box className="max-w-full">
                <Heading as="h2" size={'xs'} className="text-lg font-bold">Referensi :</Heading>
                <Link 
                  href={ item.reference != null ? `${item.reference}` : '/dasboard/service'} 
                  target={'_blank'}
                  className="text-blue-500 font-semibold mt-5 text-sm"
                >
                  { item.reference != null ? 'Selengkapnya' : 'Tidak ada' }
                </Link>
              </Box>
              <Box className="max-w-full">
                <Heading as="h2" size={'xs'} className="text-lg font-bold">Fee :</Heading>
                <p>{ `${item.range_min_fee} - ${item.range_max_fee}` }</p>
              </Box>

              <Box className="max-w-full">
                <Heading as="h2" size={'xs'} className="text-lg font-bold">Status :</Heading>
                <Badge colorScheme={ item.status == "Pending" ? 'yellow' : 'green'}>
                  { item.status }
                </Badge>
              </Box>

              
          
            </VStack>
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

export default Service;