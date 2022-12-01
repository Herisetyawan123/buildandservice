export default function InputFile({ name, value, label, onChange }: { name: string, value?: string, label: string, onChange?: (e) => void }){
  return (
    <div className="mb-6">
      <label className="text-base">{ label }</label>
      <input type="file" className="block mt-2 border px-5 py-2 w-full rounded-md focus:ring-1 focus:ring-blue-400" name={name} value={value} onChange={onChange} />
    </div>
  )
}