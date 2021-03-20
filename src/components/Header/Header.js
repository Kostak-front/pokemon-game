import { useHistory } from 'react-router-dom';
import classes from './Header.module.css';

const Header = ({ title, desc }) => {
   const history = useHistory()

   const handleClick = () => {
      history.push('/game')
   }

   return (
      <header className={classes.root}>
         <div className={classes.forest}></div>
         <div className={classes.silhouette}></div>
         <div className={classes.moon}></div>
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
