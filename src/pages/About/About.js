import React from 'react';
import './About.css';
import BGTrees from './bg-trees.jpg';

import ACM from './Articles/ACM/ACM';
import Camping from './Articles/Camping/Camping';
import Cycling from './Articles/Cycling/Cycling';
import ICPC from './Articles/ICPC/ICPC';

const About = ({}) => {
    return (
        <section className='about-container'>
            <header>
                <h2 className='about-header'>About Me</h2>
            </header>
            <ACM />
            <ICPC />
            <Cycling />
            <Camping />
            {/* <section className='about-sect'>
                <article className='about-sect-art'>
                    <img className='about-sect-art-img' src={BGTrees} alt='Trees' />
                    <p>Hello There</p>
                </article>
            </section> */}
        </section>
    );
};

export default About;