import React, { useState } from 'react';
import './Home.css';
import TempImg from '../Game/Witcher3/witcher_3.jpg';

const Home = ({}) => {

    return (
        <section className='home-container'>
            <header>
                <h2>Welcome!</h2>
            </header>
            <div className='home-intro-container'>
                <div className='home-intro-inner'>
                    <h2>I am G</h2>
                    <h4>And I'm a Developer, Gamer, and an occasional Cyclist</h4>
                </div>
                
            </div>
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