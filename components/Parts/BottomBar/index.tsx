import Link from "next/link";
import { FaCode, FaHome, FaPeopleArrows, FaPeopleCarry, FaPersonBooth, FaProductHunt, FaSalesforce, FaServer, FaServicestack, FaUser } from "react-icons/fa";

const BottomBar = () => {
  return (
    <div className="sm:hidden block h-[10%] bg-white shadow-md">
      <ul className="flex h-full mx-10 gap-x-1 justify-between items-center text-green-600">
        <li>
          <Link href={'/'} className={"flex flex-col items-center gap-y-1"}>
            <FaHome size={23} />
            Home
          </Link>
        </li>
        <li>
          <Link href={'/'} className={"flex flex-col items-center gap-y-1"}>
            <FaServer size={23} />
            Product
          </Link>
        </li>
        <li>
          <Link href={'/'} className={"flex flex-col items-center gap-y-1"}>

            <FaCode size={23} />
            Code

          </Link>
        </li>
        <li>
          <Link href={'/team'} className={"flex flex-col items-center gap-y-1"}>

            <FaUser size={23} />
            Teams
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BottomBar;