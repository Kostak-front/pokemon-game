import classes from './Menu.module.css';
import cn from 'classnames';

const Menu = ({ isOpen }) => {

   const navigation = [
      { title: 'HOME', href: '#welcome', },
      { title: 'GAME', href: '#game', },
      { title: 'ABOUT', href: '#about', },
      { title: 'CONTACT', href: '#contact', },
   ]

   return (
      <div className={cn(classes.menuContainer, { [classes.active]: isOpen === true, [classes.deactive]: isOpen === false })}>
         <div className={classes.overlay} />
         <ul>
            {
               navigation.map(({ title, href }, index) => (
                  <li key={index}>
                     <a href={href}>{title}</a>
                  </li>
               ))
            }
         </ul>
      </div >
   )
};

export default Menu;