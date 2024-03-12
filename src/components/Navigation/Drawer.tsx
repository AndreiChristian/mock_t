import { Link } from "react-router-dom"
import MobileLink from "./MobileLink"



interface Props {
  closeDrawer: () => void,
  setIsDrawerOpen: (arg: boolean) => void,
  isDrawerOpen: boolean
}

export default function Drawer({ isDrawerOpen, closeDrawer, setIsDrawerOpen }: Props) {
  return (

    <div className={`opacity-100 fixed top-0 left-0 z-50 w-64 h-full transform bg-white p-5 transition-transform duration-500 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
      <nav className="flex flex-col">
        <Link className='self-center mb-5 flex flex-col items-center ' to={'/'}>
          <img src={'/logo.png'} alt='Cala' width={100} height={100} />
          <span className={`text-3xl lg:text-3xl`}>
            Taverna Drobeta
          </span>
        </Link>
        <MobileLink closeDrawer={closeDrawer} href='/' text='Acasa' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/servicii' text='Servicii' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/galerie' text='Galerie' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/preturi' text='Preturi' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/contact' text='Contact' />
        <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/faq' text='Intrebari frecvente' />
      </nav>
    </div>
  )
}
