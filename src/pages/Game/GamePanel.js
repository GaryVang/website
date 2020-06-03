import React, { useState } from 'react';
// import WitcherImg from './witcher_3.jpg';
import './GamePanel.css';

const GamePanel = ({ image, title, description, message, style }) => {

    return (
        <div className='game-panel-container' style={style}>
            <div className='game-panel-top-wrapper'>
                <img className='game-panel-img' src={image.src} alt={image.alt} />
                <div className='game-panel-info'>
                    <h1 className='game-panel-title'>{title}</h1>
                    <h2 className='game-panel-description'>{description}</h2>
                </div>
            </div>
            
            <h2 className='game-panel-msg'>{message}</h2>
        </div>
        // <div className="game-panel-container">
        //     {/* <img className='game-panel-img' ></img> */}
        //     <img src={WitcherImg} alt="Geralt of Rivia" className='game-panel-img'></img>
        //     <h1 className='game-panel-title'>Game Title</h1>
        //     <h2 className='game-panel-description'>Game Description</h2>
        //     <h2 className='game-panel-msg'>Personal Msg</h2>
        // </div>
    );
};

export default GamePanel;