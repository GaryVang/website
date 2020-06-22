import React from 'react';
import './About.css';

import ACM from './Articles/ACM/ACM';
import Camping from './Articles/Camping/Camping';
import Cycling from './Articles/Cycling/Cycling';
import ICPC from './Articles/ICPC/ICPC';

const About = ({ darkTheme }) => {
    return (
        <section className='about-container'>
            <header>
                <h2 className='about-header'>About Me</h2>
            </header>
            <Cycling />
            <hr className={darkTheme ? 'about-seperator dark' : 'about-seperator light'}/>
            <ACM />
            <hr className={darkTheme ? 'about-seperator dark' : 'about-seperator light'}/>
            <ICPC />
            <hr className={darkTheme ? 'about-seperator dark' : 'about-seperator light'}/>
            <Camping />
        </section>
    );
};

export default About;