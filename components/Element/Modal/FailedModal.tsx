import LayerBlur from "../../Parts/LayerBlur"
import { FcHighPriority } from "react-icons/fc";
import Button from "../Button/Index";

const FailedModal = ({ show, error, onClick }: { show: boolean, error: string, onClick: () => void }) => {
  return (
    <LayerBlur hidden={show}>
      <div className="bg-white min-w-[20%] py-5 px-10 shadow-lg rounded-md flex flex-col justify-center items-center">
        <FcHighPriority size={100} />
        <div className="mt-5">
          <p className="font-medium">{ error }</p>
        </div>
        <div className="mt-5 flex justify-end w-full gap-x-2">
          <Button onClick={onClick} color="bg-red-400">Tutup</Button>
        </div>
      </div>
    </LayerBlur>
  )
}

export default FailedModal;