import React from 'react';
import './GamePanel.css';

const GamePanel = ({ image, title, description, message, style }) => {

    return (
        <div className='game-panel-container' style={style}>
            <div className='game-panel-left-container'>
                <img className='game-panel-img' src={image.src} alt={image.alt} />
                <h3 className='game-panel-msg'>{message}</h3>
            </div>
            <div className='game-panel-info'>
                <h1 className='game-panel-title'>{title}</h1>
                <h2 className='game-panel-description'>{description}</h2>
            </div>
        </div>
    );
};

export default GamePanel;