
import { Link } from 'react-router-dom';
import classes from './Menu.module.css';
import cn from 'classnames';

let navigation = [
   { title: 'HOME', href: '/' },
   { title: 'GAME', href: '/game' },
   { title: 'ABOUT', href: '/about' },
   { title: 'CONTACT', href: '/contact' },
]

const Menu = ({ isOpen, onChangePage }) => {

   const handleMenuItem = () => {
      onChangePage && onChangePage(!isOpen)
   }

   return (
      <div className={cn(classes.menuContainer, {
         [classes.active]: isOpen === true,
         [classes.deactive]: isOpen === false
      })}>
         <div className={classes.overlay} />
         <div>
            <ul>
               {
                  navigation.map(({ title, href }, index) => (
                     <li key={index}>
                        <Link to={href} onClick={handleMenuItem}>
                           {title}
                        </Link>
                     </li>
                  ))
               }
            </ul>
         </div>
      </div >
   )
};

export default Menu;