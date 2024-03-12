import { NavLink } from "react-router-dom";

export default function MobileLink({ href, text, closeDrawer }: { href: string, text: string, closeDrawer: () => void }) {


  return <NavLink
    onClick={closeDrawer}
    className={({ isActive }) => `
      ${isActive ? "bg-black text-white rounded-md hover:text-white" : ""}
      py-2 text-sm text-gray-500 hover:text-black px-2
      `}
    to={href}>{text}</NavLink>
}
