import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Card from "../../../components/Element/Card/Card";
import Table from "../../../components/Element/Table";
import LayoutDash from "../../../layouts/Backend";



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
      <div>
        <Card className="rounded-md border">
          <>
            <h1>Product</h1>
            <Table className="w-full mt-5" data={data} />
          </>
        </Card>
      </div>
    </LayoutDash>
  )

}

export default Sale;