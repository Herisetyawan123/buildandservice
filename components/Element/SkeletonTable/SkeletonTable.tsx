import { TableContainer, Table, Thead, Tr, Th, Skeleton, Tbody, Td } from "@chakra-ui/react"

const SkeletonTable = () => {
  return (
            <TableContainer>
              <Table className="mt-5 rounded-md border">
                <Thead className="bg-slate-100">
                  <Tr>
                    <Th>
                      <Skeleton height={'20px'}/>
                    </Th>
                    <Th>
                      <Skeleton height={'20px'}/>
                    </Th>
                    <Th>
                      <Skeleton height={'20px'}/>
                    </Th>
                    <Th>
                      <Skeleton height={'20px'}/>
                    </Th>
                    <Th>
                      <Skeleton height={'20px'}/>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                    <Td>
                      <Skeleton height={'20px'}/>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          )
}

export default SkeletonTable;