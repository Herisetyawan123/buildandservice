export type ListSelect = {
  key: string,
  value: any,
}

export default function SelectInput({ name, placeholder, data, value, label, onChange }: { name: string, placeholder: string, data: ListSelect[], type?: string, value?: string, label: string, onChange?: (e) => void }){
  return (
    <div className="mb-6">
      <label className="text-base">{ label }</label>
      <select className="block mt-2 border px-5 py-2 w-full rounded-md focus:ring-1 focus:ring-blue-400" name={name} placeholder={placeholder} value={value} onChange={onChange}>
        <option value="-">Belum dipilih</option>
        {
          data.map((item, index) => (
            <option key={index} value={item.key}>{ item.value }</option>
          ))
        }
      </select>
    </div>
  )
}