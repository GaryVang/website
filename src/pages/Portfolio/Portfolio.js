import React, { useState } from 'react';
import FFBE from './Projects/FFBE/FFBE';
import PortfolioList from './PortfolioList';
import './Portfolio.css';

const Portfolio = ({ darkTheme }) => {

    return (
        <div className='portfolio-container' >
            <h2 className='portfolio-header'>My Portfolio</h2>
            {/* <a className='portfolio-github' href={URL_GITHUB}>{URL_GITHUB}</a> */}
            <PortfolioList darkTheme={darkTheme}/>
            {/* {imgFullScreen ? <div className='portfolio-fs-background' >hello</div>
                : null 
            } */}
        </div>
    );
};

export default Portfolio;