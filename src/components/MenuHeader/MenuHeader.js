import classes from './MenuHeader.module.css';
import cn from 'classnames';
import { useState } from 'react';

const MenuHeader = () => {
   const [isActive, setActive] = useState(false)

   const handleClick = () => {
      setActive(!isActive)
   }

   const Menu = () => {
      return (
         // need to be one more className = active
         <div className={cn(classes.menuContainer, { [classes.deactive]: !isActive, [classes.active]: isActive })}>
            <div className={classes.overlay} />
            <div className={classes.menuItems}>
               <ul>
                  <li>
                     <a href={'#welcome'}>
                        HOME
                     </a>
                  </li>
                  <li>
                     <a href={'#game'}>
                        GAME
                     </a>
                  </li>
                  <li>
                     <a href={'#about'}>
                        ABOUT
                     </a>
                  </li>
                  <li>
                     <a href={'#contact'}>
                        CONTACT
                     </a>
                  </li>
               </ul>
            </div>
         </div >
      )
   };

   const Navbar = () => {
      return (
         <nav id={classes.navbar}>
            <div className={classes.navWrapper}>
               <p className={classes.brand}>
                  LOGO
                        </p>
               {/* // need to be one more className = active */}
               <a class={cn(classes.menuButton, { [classes.deactive]: !isActive, [classes.active]: isActive })} onClick={handleClick}>
                  <span />
               </a>
            </div>
         </nav>
      )
   };

   return (
      <>
         <Menu />
         <Navbar />
      </>
   )
}

export default MenuHeader;