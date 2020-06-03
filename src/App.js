import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Speedrun from './pages/Speedrun/Speedrun';
import Game from './pages/Game/Game';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import PageNotFound from './pages/404/404';
import Header from './pages/components/Header/Header';
import Nav from './pages/components/Nav/Nav';
import Logo from './pages/components/Logo/Logo';
import Footer from './pages/components/Footer/Footer';

function App() {

  const [darkTheme, setDarkTheme] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeToLight = () => {
      setDarkTheme(false);
  };

  const changeToDark = () => {
      setDarkTheme(true);
  };

  const setTheme = () => {
    if(!darkTheme) {
      document.body.style.backgroundColor = 'transparent';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'rgb(31, 31, 31)';
      document.body.style.color = 'rgba(255, 255, 255, 0.712)';
    }
  }

  return (
    <div className="App">
      <Router>
        <Nav 
          darkTheme={darkTheme} 
          changeToLight={changeToLight}
          changeToDark={changeToDark}
          isLoggedIn={isLoggedIn}
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/speedrun' component={Speedrun} />
          <Route exact path='/game' component={Game} />
          {/* <Route exact path='/login' render={() => <Login isLoggedIn={isLoggedIn}/>} /> */}
          {/* <Route exact path='/signup' render={() => <Signup isLoggedIn={isLoggedIn}/>} /> */}
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      {setTheme()}
    </div>
  );
}

export default App;
