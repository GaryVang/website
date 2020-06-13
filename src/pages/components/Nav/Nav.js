import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Dark from '@material-ui/icons/Brightness7';
import Light from '@material-ui/icons/Brightness4';
import HomeIcon from '@material-ui/icons/Home';
import GameIcon from '@material-ui/icons/VideogameAsset';
import TimerIcon from '@material-ui/icons/Timer';
import BlogIcon from '@material-ui/icons/MenuBook';
import JobIcon from '@material-ui/icons/WorkOutline';

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
        return !darkTheme ? 
        <div className='nav-container light'>
            <NavLink to='/' activeClassName='nav-active' className='nav-tab'>
                <HomeIcon className='nav-icon' fontSize='inherit'/>
                Home
            </NavLink>
            <NavLink to='/portfolio' activeClassName='nav-active' className='nav-tab'>
                <JobIcon className='nav-icon' fontSize='inherit'/>
                Portfolio
            </NavLink>
            {/* <NavLink to='/blog' activeClassName='nav-active' className='nav-tab'>
                <BlogIcon className='nav-icon' fontSize='inherit'/>
                Blog
            </NavLink> */}
            <NavLink to='/game' activeClassName='nav-active' className='nav-tab'>
                <GameIcon className='nav-icon' fontSize='inherit'/>
                Games
            </NavLink>
            <NavLink to='/speedrun' activeClassName='nav-active' className='nav-tab'>
                <TimerIcon className='nav-icon' fontSize='inherit'/>
                Speedrun
            </NavLink>
            <NavLink to='/about' activeClassName='nav-active' className='nav-tab'>
                About
            </NavLink>
            {/* <NavLink to='/login' activeClassName='nav-active' className='nav-tab login'>
                Log in
            </NavLink>
            <NavLink to='/signup' activeClassName='nav-active' className='nav-tab signup'>
                Sign up
            </NavLink> */}
            <Light className='theme-icon' onClick={changeToDark} onMouseEnter={onThemeHover} onMouseLeave={onThemeMouseLeave}/>
            {themeFocus ? <h4 className='theme-toggle-label-light'>Toggle Dark Theme</h4> 
            : null}
        </div> 
        :
        <div className='nav-container dark'>
            <NavLink to='/' activeClassName='nav-active' className='nav-tab home-tab'>
                <HomeIcon className='nav-icon' fontSize='inherit'/>
                Home
            </NavLink>
            <NavLink to='/portfolio' activeClassName='nav-active' className='nav-tab'>
                <JobIcon className='nav-icon' fontSize='inherit'/>
                Portfolio
            </NavLink>
            {/* <NavLink to='/blog' activeClassName='nav-active' className='nav-tab'>
                <BlogIcon className='nav-icon' fontSize='inherit'/>
                Blog
            </NavLink> */}
            <NavLink to='/game' activeClassName='nav-active' className='nav-tab'>
                <GameIcon className='nav-icon' fontSize='inherit'/>
                Games
            </NavLink>
            <NavLink to='/speedrun' activeClassName='nav-active' className='nav-tab'>
                <TimerIcon className='nav-icon' fontSize='inherit'/>
                Speedrun
            </NavLink>
            <NavLink to='/about' activeClassName='nav-active' className='nav-tab'>
                About
            </NavLink>
            {/* <NavLink to='/login' activeClassName='nav-active' className='nav-tab login'>
                Log in
            </NavLink>
            <NavLink to='/signup' activeClassName='nav-active' className='nav-tab signup'>
                Sign up
            </NavLink> */}
            <Dark className='theme-icon' onClick={changeToLight} onMouseEnter={onThemeHover} onMouseLeave={onThemeMouseLeave}/>
            {themeFocus ? <h4 className='theme-toggle-label-dark'>Toggle Light Theme</h4> 
            : null}
        </div>
    }

    return (
        renderNav()
    );
};

export default Nav;