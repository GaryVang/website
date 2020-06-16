import React, { useState } from 'react';
import FFBE from './Projects/FFBE/FFBE';
import PortfolioList from './PortfolioList';
import './Portfolio.css';

const Portfolio = ({}) => {

    // const URL_GITHUB = 'https://github.com/GaryVang';

    // const [imgFullScreen, setImgFullScreen] = useState(true);

    // const enableFullScreen = () => {
    //     setImgFullScreen(true);
    // };

    // const disableFullScreen = () => {
    //     setImgFullScreen(false);
    // };

    return (
        <div className='portfolio-container' >
            <h2 className='portfolio-header'>My Portfolio</h2>
            {/* <a className='portfolio-github' href={URL_GITHUB}>{URL_GITHUB}</a> */}
            <PortfolioList />
            {/* {imgFullScreen ? <div className='portfolio-fs-background' >hello</div>
                : null 
            } */}
        </div>
    );
};

export default Portfolio;