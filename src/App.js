import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './routers/Home/HomePage';
import GamePage from './routers/Game/GamePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/game" component={GamePage} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;