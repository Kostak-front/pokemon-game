import classes from './Header.module.css';

const Header = ({ title, desc, onClickButton }) => {
   const handleClick = () => {
      onClickButton && onClickButton()
   }

   return (
      <header className={classes.root}>
         <div className={classes.forest}></div>
         <div className={classes.container}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button onClick={handleClick}>
               Start GAME
            </button>
         </div>
      </header>
   )
}

export default Header;
