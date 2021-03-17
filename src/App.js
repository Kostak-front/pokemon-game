import { useState } from 'react';
import HomePage from './routers/Home/HomePage';
import GamePage from './routers/Game/GamePage';

const App = () => {
  const [page, setPage] = useState('home');

  const handleChangeButton = () => {

    if (page === 'home') {
      setPage('game');
    } else if (page === 'game') {
      setPage('home');
    }
  }

  switch (page) {
    case "home":
      return <HomePage onChangePage={handleChangeButton} />
    case "game":
      return <GamePage onButtonClick={handleChangeButton} />
    default:
      return <HomePage />
  }
}

export default App;