import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "../components/Navigation/Navigation";

export default function Root() {
  return <div className="min-h-screen bg-background w-screen flex justify-start flex-col " >
    <Navbar />
    <main className="flex-1" >
      <Outlet />
    </main>
    <Footer />
  </div>
}
