import { NavLink } from "react-router-dom";

export default function DesktopLink({ href, text }: { href: string, text: string }) {

  return <NavLink
    className={({ isActive }) => `
      ${isActive ? " bg-black text-white rounded-md hover:bg-black" : ""}
      p-1 text-lg px-2 py-2 text-md text-gray-500 hover:text-white hover:bg-gray-500 rounded-lg transition-colors duration-300 `}
    to={href}>{text}</NavLink>
}
