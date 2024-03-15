import React from "react"
import { Input } from "../../components/ui/input.tsx";
import { Textarea } from "../../components/ui/textarea.tsx";

export default function LoginRoute() {
  return <section>
    <div
      style={{ backgroundImage: "url('/images/locatie/TS(144).jpg')" }}
      className="relative flex justify-center items-center h-screen w-full overflow-hidden bg-cover
      ">
      <div
        className="bg-white flex flex-col gap-10 w-full mx-10  p-10 rounded-lg md:w-3/4 lg:w-1/2 drop-shadow-2xl "
      >
        <h1 className="text-4xl" >Login</h1>
        <Input placeholder="name" />
        <Input />
        <Input />
        <Textarea placeholder="Bar" />
        <div className="col-span-full">
          <button className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
            Submit your request
          </button>
        </div>
      </div>
    </div>

  </section>
}

