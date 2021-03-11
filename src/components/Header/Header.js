import classes from './Header.module.css';

const Header = ({ title, desc }) => {

   return (
      <header className={classes.root}>
         <div className={classes.forest}></div>
         <div className={classes.container}>
            <h1>{title}</h1>
            <p>{desc}</p>
         </div>
      </header>
   )
}
//
export default Header;