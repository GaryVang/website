import React, { useState } from 'react';
// import WitcherImg from './witcher_3.jpg';
import './PortfolioPanel.css';

const PortfolioPanel = ({ id, image, title, description, link, style }) => {

    const renderPortfolio = () => {
        // console.log(key%2);
        if(id%2 === 1){
            return (
                <div className='portfolio-panel-container' style={style}>
                    <img className='portfolio-panel-img' src={image.src} alt={image.alt} />
                    <div className='portfolio-info-container'>
                        <h1>{title}</h1>
                        <h3>Link: {link}</h3>
                        <h3>{description}</h3>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='portfolio-panel-container' style={style}>
                    <div className='portfolio-info-container'>
                        <h1>{title}</h1>
                        <h3>Link: {link}</h3>
                        <h3>{description}</h3>
                    </div>
                    <img className='portfolio-panel-img' src={image.src} alt={image.alt} />
                </div>
            );
        }
    }
    
    return (
        <div>
            {renderPortfolio()}
        </div>
    )
};

export default PortfolioPanel;