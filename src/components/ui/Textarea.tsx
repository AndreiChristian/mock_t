interface Props {
  label: string
  placeholder: string
}

export default function Textarea({ label, placeholder }: Props) {
  return (
    <div>
      <div>
        <label className="block mb-3 text-sm font-medium text-gray-600" >
          {label}
        </label>
        <div className="mt-1">
          <textarea className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder={placeholder} ></textarea>
        </div>
      </div>
    </div>
  )
}
