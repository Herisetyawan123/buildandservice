import { NextPage } from "next";
import LayoutDash from "../../../layouts/Backend";
import { Card, CardBody, CardFooter, CardHeader, Flex, Heading } from "@chakra-ui/react";
import DataTable from "../../../components/Element/Table/DataTable"



const Sale: NextPage = (): JSX.Element => {
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
  return (
    <LayoutDash>
      <Card bgColor="white">
        <CardHeader>
          <Flex justify={"space-between"} align={"center"}>
            <Heading size='md'>Semua Product</Heading>
          </Flex>
        </CardHeader>
        <CardBody>

          <DataTable data={data} />

        </CardBody>
        <CardFooter>
          
        </CardFooter>
      </Card>
    </LayoutDash>
  )

}

export default Sale;