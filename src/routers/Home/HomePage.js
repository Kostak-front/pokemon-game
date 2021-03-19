import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layput';
import Footer from '../../components/Footer/Footer';
import BG2 from '../../assets/bg2.jpg';
import BG1 from '../../assets/bg1.jpg';
import classes from './Home.module.css';


const HomePage = () => {

   return (
      <>
         <Header
            title="This is props.title"
            desc="This is props.description!"
         />
         <Layout
            id="rules"
            title="Section Title 1"
            urlBg={BG1}
         >
            <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
            Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
            <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
         </Layout>
         <Layout
            id="cards"
            title="Section Title 2"
            colorBg="#e2e2e2"
         >
            <div className={classes.flex}>
            </div>
         </Layout>
         <Layout
            id="about"
            title="Section Title 3"
            urlBg={BG2}
         >
            <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
            Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
            <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
         </Layout>
      </>
   );
}

export default HomePage;
