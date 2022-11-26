const Card = ({ children, className } : { children: JSX.Element, className: string }) => {
  return (
    <div className={`bg-white p-5 ${className}`}>
      { children }
    </div>
  )
}

export default Card;