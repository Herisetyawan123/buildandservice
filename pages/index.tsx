import type { NextPage } from 'next'
import Button from '../components/Element/Button/Index'
import LayoutApp from '../components/Layouts/Frontend/Index'

const Home: NextPage = () => {
  return (
    <LayoutApp>
        <Button link="/auth/signin">Login</Button>
        <Button>Register</Button>
    </LayoutApp>
  )
}

export default Home
