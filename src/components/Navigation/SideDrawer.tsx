import { Link } from "react-router-dom"
import MobileLink from "./MobileLink"
import { ModeToggle } from "../theme-toggle"

interface Props {
  closeDrawer: () => void,
  setIsDrawerOpen: (arg: boolean) => void,
  isDrawerOpen: boolean
}

export function Drawer({ isDrawerOpen, closeDrawer, setIsDrawerOpen }: Props) {
  return (

    <div className={`opacity-100 fixed top-0 left-0 z-50 w-64 h-full transform bg-primary p-5 transition-transform duration-500 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
      <nav className="h-full flex flex-col">
        <Link className='self-center mb-5 flex flex-col items-center ' to={'/'}>
          <img src={'/logo.png'} alt='Cala' width={150} height={150} />
          <span className={`text-3xl lg:text-3xl text-primary-foreground text-center m-5 font-grange `}>
            Taverna Drobeta
          </span>
        </Link>
        <MobileLink closeDrawer={closeDrawer} href='/' text='Acasa' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/produse' text='Produse' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/servicii' text='Servicii' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/galerie' text='Galerie' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/preturi' text='Preturi' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/contact' text='Contact' />
        <span className="flex-1"></span>
        <span className="self-center" >
          <ModeToggle />
        </span>
      </nav>
    </div>
  )
}
