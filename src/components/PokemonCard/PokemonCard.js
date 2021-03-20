import cardBack from '../../assets/card-back-side.jpg';
import classes from './PokemonCard.module.css';
import cn from 'classnames';

const PokemonCard = ({ name, img, id, type, values, isActive, handleClick }) => {


   return (
      <div className={classes.root} onClick={() => { handleClick(id) }}>
         <div className={cn(classes.pokemonCard, { [classes.active]: isActive })}>
            <div className={classes.cardFront}>
               <div className={cn(classes.wrap, classes.front)}>
                  <div className={cn(classes.pokemon, classes.[type])}>
                     <div className={classes.values}>
                        <div className={cn(classes.count, classes.top)}>{values.top}</div>
                        <div className={cn(classes.count, classes.right)}>{values.right}</div>
                        <div className={cn(classes.count, classes.bottom)}>{values.bottom}</div>
                        <div className={cn(classes.count, classes.left)}>{values.left}</div>
                     </div>
                     <div className={classes.imgContainer}>
                        <img src={img} alt={name} />
                     </div>
                     <div className={classes.info}>
                        <span className={classes.number}>#{id}</span>
                        <h3 className={classes.name}></h3>
                        <small className={classes.type}>Type: <span>{type}</span></small>
                     </div>
                  </div>
               </div>
            </div >

            <div className={classes.cardBack}>
               <div className={`${classes.wrap} ${classes.back}`}>
                  <img src={cardBack} alt={name} />
               </div>
            </div>

         </div >
      </div >
   )
}

export default PokemonCard;