
import { useState, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import classes from './GamePage.module.css'

import database from '../../service/firebase'


const GamePage = () => {

   const [pokemons, setPokemons] = useState({})

   // useEffect(() => {
   //    database.ref('pokemons').once('value', (snapshot) => {
   //       setPokemons(snapshot.val())
   //    })
   // }, [])

   // const handleCardClick = (id) => {
   //    setPokemon([...pokemon, id])
   //    console.log(pokemon)
   //    console.log(pokemonsData)

   // }
   // console.log(pokemon)
   // console.log(pokemonsData)

   const handleCardClick = (id) => {

      setPokemons(prevState => {
         return Object.entries(prevState).reduce((acc, item) => {
            const pokemon = { ...item[1] };
            if (pokemon.id === id) {
               console.log(pokemon);
               pokemon.active = true;
               console.log(pokemon.active)
            };

            acc[item[0]] = pokemon;

            return acc;
         }, {});
      });

      // setPokemons(prevState => {
      //    return Array.from(prevState, (item) => {
      //       if (item.id === id) {
      //          item.active = true
      //       }
      //       return item
      //    });
      // })
   }

   const handleClick = () => {
      return console.log('activateCards')
   }

   return (
      <div>
         <h1>THIS IS PAGE OF THE GamePage</h1>
         <button onClick={handleClick} >SHOW CARDS</button>
         <div className={classes.flex}>
            {
               Object.entries(pokemons).map(([key, { name, id, img, type, values, active }]) => <PokemonCard
                  key={key}
                  name={name}
                  img={img}
                  id={id}
                  type={type}
                  values={values}
                  isActive={active}
                  handleClick={handleCardClick} />)
            }
         </div>

      </div>
   )
}

export default GamePage;
