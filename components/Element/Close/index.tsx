const Close = ({ onClick }) => {
  return (
    <div className="absolute cursor-pointer top-5 right-10" onClick={onClick}>
      <span className="absolute inline-block w-5 h-1 rounded bg-gray-400 rotate-45"></span>
      <span className="absolute inline-block w-5 h-1 rounded bg-gray-400 -rotate-45"></span>
    </div>
  )
}
export default Close;