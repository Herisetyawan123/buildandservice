import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const TabDropdown = ({ question, answer }: {
  question: string
  answer: string
}) => {
  const [click, setClick] = useState(false)
  return (
    <div>
      <div className={`w-full rounded-md ${click ? '' : 'shadow-md'} p-5 border`}>
        <div className="flex items-center justify-between" onClick={() => setClick(!click)}>
          <h1 className="text-slate-600 font-bold text-lg">{ question }</h1>
          <FaAngleDown size={25} />
        </div>
      </div>
      <div className={`${click ? 'block' : 'hidden'} w-full shadow-md p-5 border`}>
          <p>
            { answer }
            
          </p>
        </div>
    </div>
  )
}

export default TabDropdown;