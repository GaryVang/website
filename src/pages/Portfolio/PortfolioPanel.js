import React, { useState } from 'react';
// import WitcherImg from './witcher_3.jpg';
import './PortfolioPanel.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const PortfolioPanel = ({ id, image, title, description, link, style }) => {

    const handleLeftArrow = () => {
        console.log('port left arrow clicked');
    };

    const handleRightArrow = () => {
        console.log('port right arrow clicked');
    };

    const renderPortfolio = () => {
        // console.log(key%2);
        if(id%2 === 1){
            return (
                <div className='portfolio-panel-container' style={style}>
                    <div className='portfolio-panel-img-container'>
                        <img className='portfolio-panel-img' src={image.src} alt={image.alt} />
                        <div className='portfolio-panel-img-bot-wrapper'>
                            <NavigateBeforeIcon className='portfolio-nav-arrow' fontSize='large' onClick={handleLeftArrow} />
                            <label className='portfolio-panel-img-title'>IMG Title</label>
                            <NavigateNextIcon className='portfolio-nav-arrow' fontSize='large' onClick={handleRightArrow} />
                        </div>
                    </div>
                    {/* <img className='portfolio-panel-img' src={image.src} alt={image.alt} /> */}
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
                    <div className='portfolio-panel-img-container'>
                        <img className='portfolio-panel-img' src={image.src} alt={image.alt} />
                        <div className='portfolio-panel-img-bot-wrapper'>
                            <NavigateBeforeIcon className='portfolio-nav-arrow' fontSize='large' onClick={handleLeftArrow} />
                            <label className='portfolio-panel-img-title'>IMG Title</label>
                            <NavigateNextIcon className='portfolio-nav-arrow' fontSize='large' onClick={handleRightArrow} />
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    return (
        // <div>
        <React.Fragment>
            {renderPortfolio()}
        </React.Fragment>
            // {renderPortfolio()}
        // </div>
    )
};

export default PortfolioPanel;