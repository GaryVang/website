import React, { useState, useEffect } from 'react';
import FFBE from './Projects/FFBE/FFBE';
import Blog from './Projects/Blog/Blog';
import SeniorProj from './Projects/SeniorProject/SeniorProject';
import Scooper from './Projects/Scooper/Scooper';

const PortfolioList = ({}) => {

    const [portfolioList] = useState([FFBE, Scooper, SeniorProj, Blog]);


    const renderProject = () => {
       return portfolioList.map((Project, index)=> {
            return (
                <React.Fragment className='react-frag'>
                    <Project className='hello' key={index} id={index+1}/>
                </React.Fragment>
            );
        });
    };

    return (
        <div className='portfolio-list-container'>
            {renderProject()}
            {/* <div>{renderProject()}</div> */}
            {/* <div className='hello'>hello</div> */}
        </div>
    );
};

export default PortfolioList;