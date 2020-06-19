import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
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

  const [darkTheme, setDarkTheme] = useState(false);
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
      // document.body.style.color = 'rgba(255, 255, 255, 0.712)';
      // document.body.style.color = 'rgba(255, 255, 255, .9)';
      document.body.style.color = 'rgba(255, 255, 255, 1)';
    }
  }

  return (
    <div className="App">
      <Router>
        <header>
          <Nav
            darkTheme={darkTheme} 
            changeToLight={changeToLight}
            changeToDark={changeToDark}
            isLoggedIn={isLoggedIn}
          />
        </header>
        <div className='app-content'>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/' render={() => <Home darkTheme={darkTheme} />} />
            <Route exact path='/about' component={About} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/speedrun' component={Speedrun} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/portfolio' component={Portfolio} />
            {/* <Route exact path='/login' render={() => <Login isLoggedIn={isLoggedIn}/>} /> */}
            {/* <Route exact path='/signup' render={() => <Signup isLoggedIn={isLoggedIn}/>} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/speedrun' component={Speedrun} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/portfolio' component={Portfolio} /> */}
          {/* <Route exact path='/login' render={() => <Login isLoggedIn={isLoggedIn}/>} /> */}
          {/* <Route exact path='/signup' render={() => <Signup isLoggedIn={isLoggedIn}/>} /> */}
          {/* <Route component={PageNotFound} /> */}
        {/* </Switch> */}
      </Router>
      {setTheme()}
    </div>
  );
}

export default App;
