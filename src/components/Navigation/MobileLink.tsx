import { NavLink } from "react-router-dom";

export default function MobileLink({ href, text, closeDrawer }: { href: string, text: string, closeDrawer: () => void }) {


  return <NavLink
    onClick={closeDrawer}
    className={({ isActive }) => `
      ${isActive ? "bg-background text-foreground rounded-md hover:text-primary" : "text-primary-foreground"}
      py-2 text-md  hover:underline px-2
      `}
    to={href}>{text}</NavLink>
}
