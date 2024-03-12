import { useState } from 'react';
import DesktopLink from './DesktopLink';
import Overlay from './Overlay';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="fixed bg-transparent backdrop-blur-xl drop-shadow-xl z-30 top-0 p-4 md:p-2 md:py-3 w-full max-w-full box-border ">
        <div className="bg-transparent relative flex flex-col w-full px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="bg-transparent flex flex-row items-center justify-between lg:justify-start">
            <Logo />
            <DrawerToggle isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
          </div>
          <DesktopNavigation />
        </div>
      </div>
      <Drawer closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Overlay isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </>
  );
};

function DesktopNavigation() {
  return (
    <nav className="hidden md:flex md:flex-row items-center gap-2">
      <DesktopLink href='/' text='Acasa' />
      <DesktopLink href='/servicii' text='Servicii' />
      <DesktopLink href='/galerie' text='Galerie' />
      <DesktopLink href='/preturi' text='Preturi' />
      <DesktopLink href='/contact' text='Contact' />
      <DesktopLink href='/faq' text='Intrebari frecvente' />
    </nav>
  )
}

function DrawerToggle({ isDrawerOpen, setIsDrawerOpen }: { isDrawerOpen: boolean, setIsDrawerOpen: (arg: boolean) => void }) {
  return (

    <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
      <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
        {isDrawerOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
        )}
      </svg>
    </button>
  )
}

function Logo() {
  return (
    <Link className="
            text-lg tracking-tight text-black focus:outline-none lg:text-2xl
            flex items-center
            " to="/">
      <img src={'/logo.png'} alt='Cala' width={100} height={100} className='hidden md:block' />
      <span className={` text-xl lg:text-3xl`}>
        Spalatoria Cala
      </span>
    </Link>

  )
}

export default Navbar;
