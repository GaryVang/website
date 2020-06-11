import React, { useState, useEffect } from 'react';
import FFBE from './Projects/FFBE/FFBE';
import Blog from './Projects/Blog/Blog';
import SeniorProj from './Projects/SeniorProject/SeniorProject';
import Scooper from './Projects/Scooper/Scooper';
import './PortfolioList.css';

const PortfolioList = ({}) => {

    const [portfolioList] = useState([FFBE, Scooper, SeniorProj, Blog]);

    // const [imgFullScreen, setImgFullScreen] = useState(true);

    // const enableFullScreen = () => {
    //     setImgFullScreen(true);
    // };

    // const disableFullScreen = () => {
    //     setImgFullScreen(false);
    // };

    const renderProject = () => {
       return portfolioList.map((Project, index)=> {
            return (
                <React.Fragment>
                    <Project key={index} id={index+1}/>
                </React.Fragment>
            );
        });
    };

    return (
        <div className='portfolio-list-container'>
            {renderProject()}
            {/* {imgFullScreen ? <div className='portfolio-fs-background' ></div>
                : null 
            } */}
            {/* <div>{renderProject()}</div> */}
            {/* <div className='hello'>hello</div> */}
        </div>
    );
};

export default PortfolioList;