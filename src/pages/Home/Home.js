import React, { useState } from 'react';
import './Home.css';
import TempImg from '../Game/Witcher3/witcher_3.jpg';

const Home = ({ darkTheme }) => {
    console.log('theme: ', darkTheme);

    return (
        <section className='home-container'>
            <header>
                <h2 className='home-header'>Welcome,</h2>
            </header>
            <section className='home-section-1-container'>
                <h2 className='home-section-1-header'>I am G</h2>
                <div className='home-avatar-container'>
                    <img className='home-avatar' src={TempImg} alt='home-avatar'/>
                </div>
                <div className='home-section-1-text-container'>
                    {/* <h2>I am G</h2> */}
                    <h4>And I'm a Developer, Gamer, and an occasional Cyclist</h4>
                    <div className='home-section-1-text-contact-container'>
                        <h5>Email: <span className='fw-normal'>email@email.com</span></h5>
                        <h5>LinkedIn: <span className={!darkTheme ? 'light-link' : 'dark-link'}>://LinkedIn</span></h5>
                        <h5>GitHub: <span className={!darkTheme ? 'light-link' : 'dark-link'}>https://github.com/GaryVang</span></h5>
                    </div>
                </div>
            </section>


            {/* <div className='home-intro-container'>
                <div className='home-intro-inner'>
                    <h2>I am G</h2>
                    <h4>And I'm a Developer, Gamer, and an occasional Cyclist</h4>
                </div>
                
            </div> */}
            {/* <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className='avatar-img' src={TempImg} alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Home;

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_blurred_bg