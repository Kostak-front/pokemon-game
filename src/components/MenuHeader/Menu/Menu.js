import classes from './Menu.module.css';
import cn from 'classnames';

const Menu = ({ active, onhandleClick }) => {

   let navigation = {
      home: { name: 'HOME', href: '#welcome' },
      game: { name: 'GAME', href: '#game' },
      about: { name: 'ABOUT', href: '#about' },
      contact: { name: 'CONTACT', href: '#contact' },
   }

   return (
      <div className={cn(classes.menuContainer, { [classes.deactive]: !active, [classes.active]: active })}>
         <div className={classes.overlay} />
         <div className={classes.menuItems}>
            <ul>
               <li>
                  <a href={navigation.home.href}>
                     {navigation.home.name}
                  </a>
               </li>
               <li>
                  <a href={navigation.game.href}>
                     {navigation.game.name}
                  </a>
               </li>
               <li>
                  <a href={navigation.about.href}>
                     {navigation.about.name}
                  </a>
               </li>
               <li>
                  <a href={navigation.contact.href}>
                     {navigation.contact.name}
                  </a>
               </li>
            </ul>
         </div>
      </div >
   )
};

export default Menu;