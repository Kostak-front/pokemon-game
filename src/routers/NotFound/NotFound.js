import { useHistory } from 'react-router-dom';

const NotFound = () => {
   const history = useHistory()

   const handleClick = () => {
      history.push('/')
   }

   return (
      <div>
         <h1> NotFound</h1>
         <button onClick={handleClick} >Back to home</button>
      </div>
   )
}

export default NotFound;