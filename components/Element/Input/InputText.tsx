export default function InputText({ name, placeholder, value, label, onChange }: { name: string, placeholder: string, value?: string, label: string, onChange?: () => void }){
  return (
    <div className="mb-6">
      <label className="text-base">{ label }</label>
      <input type="text" className="block mt-2 border px-5 py-2 w-full rounded-md focus:ring-1 focus:ring-blue-400" name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}