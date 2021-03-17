import classes from './Navbar.module.css';
import cn from 'classnames';

const Navbar = ({ active, sActive, onClick }) => {

   const onButtonClic = () => {
      console.log('navbar');
      sActive(!active)
      onClick && onClick();
   }

   return (
      <nav id={classes.navbar}>
         <div className={classes.navWrapper}>
            <p className={classes.brand}>
               LOGO
            </p>
            <a className={cn(classes.menuButton, { [classes.deactive]: !active, [classes.active]: active })} onClick={onButtonClic}>
               <span />
            </a>
         </div>
      </nav>
   )
};

export default Navbar;