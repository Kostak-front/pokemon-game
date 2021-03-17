import { useState } from 'react';
import Menu from "./Menu/Menu";
import Navbar from './Navbar/Navbar';

const MenuHeader = () => {
   const [isActive, setActive] = useState(false)

   const handleClick = () => {
      setActive(!isActive)
   }

   return (
      <>
         <Navbar active={isActive} sActive={setActive} onClick={handleClick} />
         <Menu active={isActive} onhandleClick={handleClick} />
      </>
   )
}

export default MenuHeader;