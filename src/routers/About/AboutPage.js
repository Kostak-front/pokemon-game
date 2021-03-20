import { useHistory } from 'react-router-dom';

const AboutPage = () => {
   const history = useHistory()

   const handleClick = () => {
      history.push('/')
   }

   return (
      <div>
         <h1>THIS IS PAGE OF THE About</h1>
         <button onClick={handleClick} >Back to home</button>
      </div>
   )
}

export default AboutPage;