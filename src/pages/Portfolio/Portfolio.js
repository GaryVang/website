import React, { useState } from 'react';
import FFBE from './Projects/FFBE/FFBE';
import PortfolioList from './PortfolioList';
import './Portfolio.css';

const Portfolio = ({}) => {

    // const [imgFullScreen, setImgFullScreen] = useState(true);

    // const enableFullScreen = () => {
    //     setImgFullScreen(true);
    // };

    // const disableFullScreen = () => {
    //     setImgFullScreen(false);
    // };

    return (
        <div className='portfolio-container' >
            My Portfolio
            <PortfolioList />
            {/* {imgFullScreen ? <div className='portfolio-fs-background' >hello</div>
                : null 
            } */}
        </div>
    );
};

export default Portfolio;