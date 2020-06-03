import React, { useState } from 'react';
import FFBE from './Projects/FFBE/FFBE';
import PortfolioList from './PortfolioList';
import './Portfolio.css';

const Portfolio = ({}) => {

    return (
        <div className='portfolio-container'>
            My Portfolio
            <PortfolioList />
        </div>
    );
};

export default Portfolio;