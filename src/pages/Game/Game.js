import React, { useState } from 'react';
import './Game.css';
import Witcher3 from './Witcher3/Witcher3';
import PokemonGS from './Pokemon/Pokemon';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import ArrowBackward from '@material-ui/icons/ArrowBackIos';
const Game = ({}) => {
    const [gameList] = useState([<Witcher3/>, <PokemonGS/>]);
    const [count, setCount] = useState(0);

    const renderList = () => {
// return gameList[0];
        return gameList.map((component, index) => {
            return <React.Fragment key={index}>
                { component }
            </React.Fragment>
        })
    };

    const renderGame = () => {
        return gameList[count];
    }

    const handleLeftArrow = () => {
        if(count-1 < 0) {
            setCount(gameList.length-1);
        } else {
            setCount(count-1);
        }
    };

    const handleRightArrow = () => {
        if(count+1 === gameList.length){
            setCount(0);
        } else {
            setCount(count+1);
        } 
    };

    return (
        <div className="game-container">
            <h2 className='game-header'>A List of My Favorite Video Games</h2>
            {/* <Witcher3 />
            <PokemonGS /> */}
            {/* {renderList()} */}
            <div className='game-list-wrapper'>
                {renderGame()}
                <div className='game-list-nav-wrapper'>
                    <ArrowBackward fontSize='large' onClick={handleLeftArrow}/>
                    
                    <ArrowForward fontSize='large' onClick={handleRightArrow}/> 
                </div>   
            </div> 
        </div>
    )
};

export default Game;