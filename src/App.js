
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './routers/Home/HomePage';
import GamePage from './routers/Game/GamePage';
import AboutPage from './routers/About/AboutPage';
import ContactPage from './routers/Contact/ContactPage';
import MenuHeader from './components/MenuHeader/MenuHeader';
import Footer from './components/Footer/Footer';
import classes from './App.module.css';
import cn from 'classnames';


const App = () => {
  const match = useRouteMatch('/')
  return (
    <Switch>
      <Route path="/not_found" render={() => (
        <h1>404 NOT FOUND</h1>
      )} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(classes.wrap, { [classes.isHomePage]: match.isExact })}>
            <Switch>
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/" exact component={HomePage} />
              {/* <Route render={() => (<Redirect to="/not_found" />)} /> */}
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch >
  )
}

export default App;