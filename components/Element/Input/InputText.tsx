export default function InputText({ name, placeholder, type = 'text', value, label, onChange }: { name: string, placeholder: string, type?: string, value?: string, label: string, onChange?: (e) => void }){
  return (
    <div className="mb-6">
      <label className="text-base">{ label }</label>
      <input type={type} className="block mt-2 border px-5 py-2 w-full rounded-md focus:ring-1 focus:ring-blue-400" name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}