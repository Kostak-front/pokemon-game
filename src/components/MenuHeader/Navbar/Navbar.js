import classes from './Navbar.module.css';
import cn from 'classnames';

const Navbar = ({ isOpen, bgActive = false, onButtonClicBurger }) => {

   return (
      <nav id={classes.navbar} className={cn({ [classes.bgActive]: bgActive })}>
         <div className={classes.navWrapper}>
            <p className={classes.brand}>
               LOGO
            </p>
            <div className={cn(classes.menuButton, { [classes.active]: isOpen })} onClick={onButtonClicBurger}>
               <span />
            </div>
         </div>
      </nav>
   )
};

export default Navbar;