const Table = ({ className, data }: { className: string, data: any }) => {
  return (
    <table className={`${className}`}>
      <thead>
        <td>No.</td>
        <td>Title</td>
        <td>Description</td>
        <td>Price</td>
        <td>Discount</td>
        <td>Action</td>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

export default Table;