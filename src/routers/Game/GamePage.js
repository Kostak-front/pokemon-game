const GamePage = ({ onButtonClick }) => {
   const onButtonClic = () => {
      console.log('GamePage');
      onButtonClick && onButtonClick();
   }

   return (
      <div>
         <h1>THIS IS PAGE OF THE GAME</h1>
         <button onClick={onButtonClic} >Back to home</button>
      </div>
   )
}

export default GamePage;