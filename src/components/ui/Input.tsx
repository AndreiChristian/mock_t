interface Props {
  label: string
  placeholder: string
}

export default function Input({ label, placeholder }: Props) {
  return (
    <div className="col-span-full">
      <label className="block mb-3 text-sm font-medium text-gray-600" >{label}</label>
      <input
        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        placeholder={placeholder} />
    </div>
  )
}
