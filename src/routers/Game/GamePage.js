import MenuHeader from "../../components/MenuHeader/MenuHeader";

const GamePage = ({ onChangePage }) => {
   const onButtonClic = (page) => {
      console.log(page)
      onChangePage && onChangePage();
   }

   return (
      <>
         <MenuHeader />
         <div >
            <h1>THIS IS PAGE OF THE GAME</h1>
            <button onClick={onButtonClic} >Back to home</button>
         </div>
      </>
   )
}

export default GamePage;