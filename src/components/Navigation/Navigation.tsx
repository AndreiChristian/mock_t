import { useState } from 'react';
import DesktopLink from './DesktopLink';
import Overlay from './Overlay';
import { Link } from 'react-router-dom';
import { Drawer } from './SideDrawer';
import { ModeToggle } from '../theme-toggle';
import { ShoppingBagIcon } from 'lucide-react';
import CustomCard from '../custom/CustomCard';
import constants from '@/constants/constants';

const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className={`box-border px-${constants.paddingSize}`}>
      <CustomCard paddingSize={2} type='primary' >
        <div className='box-border px-2  w-full rounded-xl flex flex-row items-center justify-between' >
          <Link to={"/cart"} >
            <ShoppingBagIcon className='lg:hidden stroke-primary-foreground' />
          </Link>
          <span className='lg:hidden flex-1'></span>
          <Logo />
          <span className='flex-1'></span>
          <DesktopNavigation />
          <DrawerToggle isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        </div>
      </CustomCard>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} closeDrawer={closeDrawer} />
      <Overlay isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </div>
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
      <ModeToggle />
      <Link to={"/cart"} >
        <ShoppingBagIcon className='stroke-primary-foreground ml-2' />
      </Link>
    </nav>
  )
}

function DrawerToggle({ isDrawerOpen, setIsDrawerOpen }: { isDrawerOpen: boolean, setIsDrawerOpen: (arg: boolean) => void }) {
  return (

    <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
      <svg className="w-6 h-6 stroke-primary-foreground" fill="none" viewBox="0 0 24 24">
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
            text-lg tracking-tight text-primary-foreground focus:outline-none lg:text-2xl
            flex items-center
            " to="/">
      <img src={'/logo.png'} alt='Cala' width={75} height={75} className='hidden md:block' />
      <span className={`md:hidden text-xl lg:text-3xl ml-2 font-grange `}>
        Taverna Drobeta
      </span>
    </Link>

  )
}

export default Navbar;
