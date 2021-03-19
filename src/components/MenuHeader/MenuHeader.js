import { useState } from 'react';
import Menu from "./Menu/Menu";
import Navbar from './Navbar/Navbar';

const MenuHeader = ({ bgActive }) => {
   const [isOpen, setOpen] = useState(null)

   const handleClickBurger = () => {
      setOpen(prevState => !prevState)
   }

   return (
      <>
         <Navbar isOpen={isOpen} bgActive={bgActive} onButtonClicBurger={handleClickBurger} />
         <Menu isOpen={isOpen} onChangePage={handleClickBurger} />
      </>
   )
}

export default MenuHeader;