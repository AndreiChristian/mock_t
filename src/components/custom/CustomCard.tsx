import constants from "@/constants/constants";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
  type?: "default" | "primary" | "secondary" | "ghost",
  paddingSize?: number,
  cancelMarginRight?: boolean
}

const cardColors = {
  default: "bg-card text-card-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  ghost: "bg-background text-foreground"
}


export default function CustomCard({ children, type = "default", paddingSize = constants.paddingSize, cancelMarginRight = false }: Props) {
  return <div className={`
    box-border m-2 p-${paddingSize}  my-2 rounded-xl w-full ${cancelMarginRight && "mr-0"} 
    ${cardColors[type]}
    `} >
    {children}
  </div>
}
