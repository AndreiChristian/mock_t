export default function Title({ text = "Dummy text" }: { text: string }) {
  return (
    <h1 className="text-5xl" >{text}</h1>
  )
}
