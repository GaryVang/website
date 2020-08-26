import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Dark from "@material-ui/icons/Brightness7";
import Light from "@material-ui/icons/Brightness4";
import HomeIcon from "@material-ui/icons/Home";
import GameIcon from "@material-ui/icons/VideogameAsset";
// import TimerIcon from '@material-ui/icons/Timer';
// import BlogIcon from '@material-ui/icons/MenuBook';
import JobIcon from "@material-ui/icons/WorkOutline";

const Nav = ({ darkTheme, changeToLight, changeToDark }) => {
  const [themeFocus, setThemeFocus] = useState(false);
  const [onHover, setOnHover] = useState(false);
  useEffect(() => {
    const timer = onHover && setTimeout(onTimeout, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [onHover]);

  const onTimeout = () => {
    setThemeFocus(true);
  };

  const onThemeHover = () => {
    setOnHover(true);
  };

  const onThemeMouseLeave = () => {
    setThemeFocus(false);
    setOnHover(false);
  };

  const renderNav = () => {
    return !darkTheme ? (
      <nav className="nav-container light">
        <NavLink exact to="/" activeClassName="nav-active" className="nav-tab">
          <HomeIcon className="nav-icon" fontSize="inherit" />
          Home
        </NavLink>
        <NavLink
          exact
          to="/portfolio"
          activeClassName="nav-active"
          className="nav-tab"
        >
          <JobIcon className="nav-icon" fontSize="inherit" />
          Portfolio
        </NavLink>
        {/* <NavLink exact to='/blog' activeClassName='nav-active' className='nav-tab'>
                <BlogIcon className='nav-icon' fontSize='inherit'/>
                Blog
            </NavLink> */}

        {/* <NavLink
          exact
          to="/game"
          activeClassName="nav-active"
          className="nav-tab"
        >
          <GameIcon className="nav-icon" fontSize="inherit" />
          Games
        </NavLink> */}
        
        {/* <NavLink exact to='/speedrun' activeClassName='nav-active' className='nav-tab'>
                <TimerIcon className='nav-icon' fontSize='inherit'/>
                Speedrun
            </NavLink> */}
        <NavLink
          exact
          to="/about"
          activeClassName="nav-active"
          className="nav-tab"
        >
          About Me
        </NavLink>
        {/* <NavLink exact to='/login' activeClassName='nav-active' className='nav-tab login'>
                Log in
            </NavLink>
            <NavLink exact to='/signup' activeClassName='nav-active' className='nav-tab signup'>
                Sign up
            </NavLink> */}
        <Light
          className="theme-icon"
          onClick={changeToDark}
          onMouseEnter={onThemeHover}
          onMouseLeave={onThemeMouseLeave}
        />
        {themeFocus ? (
          <h4 className="theme-toggle-label-light">Toggle Dark Theme</h4>
        ) : null}
      </nav>
    ) : (
      <nav className="nav-container dark">
        <NavLink
          exact
          to="/"
          activeClassName="nav-active"
          className="nav-tab home-tab"
        >
          <HomeIcon className="nav-icon" fontSize="inherit" />
          Home
        </NavLink>
        <NavLink
          exact
          to="/portfolio"
          activeClassName="nav-active"
          className="nav-tab"
        >
          <JobIcon className="nav-icon" fontSize="inherit" />
          Portfolio
        </NavLink>
        {/* <NavLink exact to='/blog' activeClassName='nav-active' className='nav-tab'>
                <BlogIcon className='nav-icon' fontSize='inherit'/>
                Blog
            </NavLink> */}

        {/* <NavLink
          exact
          to="/game"
          activeClassName="nav-active"
          className="nav-tab"
        >
          <GameIcon className="nav-icon" fontSize="inherit" />
          Games
        </NavLink> */}

        {/* <NavLink exact to='/speedrun' activeClassName='nav-active' className='nav-tab'>
                <TimerIcon className='nav-icon' fontSize='inherit'/>
                Speedrun
            </NavLink> */}

            
        <NavLink
          exact
          to="/about"
          activeClassName="nav-active"
          className="nav-tab"
        >
          About Me
        </NavLink>
        {/* <NavLink exact to='/login' activeClassName='nav-active' className='nav-tab login'>
                Log in
            </NavLink>
            <NavLink exact to='/signup' activeClassName='nav-active' className='nav-tab signup'>
                Sign up
            </NavLink> */}
        <Dark
          className="theme-icon"
          onClick={changeToLight}
          onMouseEnter={onThemeHover}
          onMouseLeave={onThemeMouseLeave}
        />
        {themeFocus ? (
          <h4 className="theme-toggle-label-dark">Toggle Light Theme</h4>
        ) : null}
      </nav>
    );
  };

  return renderNav();
};

export default Nav;
