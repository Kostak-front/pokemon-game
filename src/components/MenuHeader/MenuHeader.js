import { useState } from 'react';
import Menu from "./Menu/Menu";
import Navbar from './Navbar/Navbar';

const MenuHeader = ({ bgActive }) => {
   const [isOpen, setOpen] = useState(null);

   const handleClickBurger = () => {
      setOpen(prevState => !prevState);
   }

   return (
      <>
         <Menu isOpen={isOpen} />
         <Navbar isOpen={isOpen} bgActive={bgActive} onClickBurger={handleClickBurger} />
      </>
   )
}

export default MenuHeader;