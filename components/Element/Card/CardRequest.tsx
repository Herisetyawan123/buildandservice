const CardRequest = ({ title, children }: { title: string, children: JSX.Element }) => {
  return (
    <div className="border p-5 rounded-md bg-white">
      <h2 className="mb-1 font-semibold text-lg">{ title }</h2>
      <hr className="mb-2" />
      { children }
    </div>
  )
}

export default CardRequest;