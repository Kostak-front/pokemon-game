import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import myData from '../../myData/myData.json'

const POKEMONS = JSON.parse(JSON.stringify(myData))

const GamePage = () => {
   const history = useHistory()
   const [isActive, setActive] = useState(null)
   const [pokemon, setPokemon] = useState(POKEMONS)

   // const handleCardClick = (id) => {
   //    setPokemon([...pokemon, id])
   //    console.log(pokemon)
   //    console.log(pokemonsData)

   // }
   // console.log(pokemon)
   // console.log(pokemonsData)

   const handleCardClick = (id) => {
      setActive(prevState => !prevState);

      setPokemon(prevState => prevState.map(item => {
         if (item.id === id) {
            item.active = true
         }

         console.log(item.active)
      }))

      console.log(pokemon)
      console.log(myData)
   }


   const handleClick = () => {
      history.push('/')
   }

   return (
      <div>
         <h1>THIS IS PAGE OF THE GamePage</h1>
         <div>
            {
               pokemon.map(item => <PokemonCard
                  key={item.id}
                  name={item.name}
                  img={item.img} id={item.id} type={item.type} values={item.values} isActive={item.active} handleClick={handleCardClick} />)
            }
         </div>
         <button onClick={handleClick} >Back to home</button>
      </div>
   )
}

export default GamePage;