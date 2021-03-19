import { useHistory } from 'react-router-dom';

const ContactPage = () => {
   const history = useHistory()

   const handleClick = () => {
      history.push('/')
   }

   return (
      <div>
         <h1>THIS IS PAGE OF THE Contact</h1>
         <button onClick={handleClick} >Back to home</button>
      </div>
   )
}

export default ContactPage;