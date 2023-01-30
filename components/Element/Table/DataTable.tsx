import { Box, Button, ButtonGroup, Flex, Heading, Input, InputGroup, InputRightElement, Select, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { HiRefresh, HiSearch, HiTrash } from "react-icons/hi";

interface Props{
  data: any
  onDelete?: () => void
  onEdit?: () => void
  onSubmit?: (e) => void
}

const DataTable = ( { data, onDelete, onEdit, onSubmit } : Props ) => {
  console.log(data)
  return (
    <div className="w-full overflow-x-auto">
      {
        data.length == 0 ? (
          <>
            <h1>Data tidak ada</h1> 
          </>
        ) : (
          <>
            <Flex justify={'space-between'}>
              <Box>
                <Select placeholder="page">
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </Select>
              </Box>
              <form onSubmit={onSubmit}>
                <InputGroup>
                  <Input placeholder="search..." />
                  <InputRightElement>
                    <HiSearch />
                  </InputRightElement>
                </InputGroup>
              </form>
            </Flex>
            <Table className="mt-5 rounded-md border">
              <Thead className="bg-slate-100">
                <Tr>
                  <Th>No.</Th>
                  {
                    Object.keys(data[0]).map((item, index) => (
                      <Th key={index}>{ item }</Th>
                    ))
                  }
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  data.length > 0 ?
                    data.map((item, index) => (
                      <Tr key={index}>
                        <Td>{ index + 1 }</Td>
                        <Td>{ item.title }</Td>
                        <Td>{ item.category }</Td>
                        <Td>{ item.description.length < 80 ? item.description : item.description.substring(0, 60) + "..." }</Td>
                        <Td>{ item.price }</Td>
                        <Td>{ item.discount }</Td>
                        <Td>
                          <ButtonGroup>
                            <Button size={'sm'} colorScheme="red"><HiTrash className="mr-1" /> hapus</Button>
                            <Button size={'sm'} colorScheme="blue"><HiRefresh className="mr-1" /> edit</Button>
                          </ButtonGroup>
                        </Td>
                      </Tr>
                    ))
                  :
                  <Tr>
                    <Td colSpan={7} className={'text-center'} >
                      <Heading size={'sm'} textAlign={'center'}>Tidak ada data</Heading>
                    </Td>
                  </Tr>
                }
              </Tbody>
            </Table>
          </>
        )
      }
    </div>
  )
}

export default DataTable;