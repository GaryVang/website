import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Dark from '@material-ui/icons/Brightness7';
import Light from '@material-ui/icons/Brightness4';

const Nav = ({ darkTheme, changeToLight, changeToDark }) => {

    const renderNav = () => {
        return !darkTheme ? 
        <div className='nav-container light'>
            <NavLink to='/' activeClassName='nav-active' className='nav-tab'>
                Home
            </NavLink>
            <NavLink to='/blog' activeClassName='nav-active' className='nav-tab'>
                Blog
            </NavLink>
            <NavLink to='/speedrun' activeClassName='nav-active' className='nav-tab'>
                Speedrun
            </NavLink>
            <NavLink to='/game' activeClassName='nav-active' className='nav-tab'>
                Games
            </NavLink>
            <NavLink to='/about' activeClassName='nav-active' className='nav-tab'>
                About
            </NavLink>
            <NavLink to='/login' activeClassName='nav-active' className='nav-tab login'>
                Log in
            </NavLink>
            <NavLink to='/signup' activeClassName='nav-active' className='nav-tab signup'>
                Sign up
            </NavLink>
            <Light onClick={changeToDark}/>
        </div> 
        :
        <div className='nav-container dark'>
            <NavLink to='/' activeClassName='nav-active' className='nav-tab'>
                Home
            </NavLink>
            <NavLink to='/blog' activeClassName='nav-active' className='nav-tab'>
                Blog
            </NavLink>
            <NavLink to='/speedrun' activeClassName='nav-active' className='nav-tab'>
                Speedrun
            </NavLink>
            <NavLink to='/game' activeClassName='nav-active' className='nav-tab'>
                Games
            </NavLink>
            <NavLink to='/about' activeClassName='nav-active' className='nav-tab'>
                About
            </NavLink>
            <NavLink to='/login' activeClassName='nav-active' className='nav-tab login'>
                Log in
            </NavLink>
            <NavLink to='/signup' activeClassName='nav-active' className='nav-tab signup'>
                Sign up
            </NavLink>
            <Dark onClick={changeToLight}/>
        </div>
    }

    return (
        renderNav()
    );
};

export default Nav;