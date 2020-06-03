import React, { useState, useEffect } from 'react';
import './FavoriteList.css';
import Witcher3 from './Witcher3/Witcher3';
import PokemonGS from './Pokemon/Pokemon';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import ArrowBackward from '@material-ui/icons/ArrowBackIos';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const FavoriteList = ({}) => {

    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('lllll');
            setVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, [visible]);
    const [gameList] = useState([<Witcher3/>, <PokemonGS/>]);
    const [count, setCount] = useState(0);
    

    const renderGame = () => {
        return gameList[count];
    }

    const handleLeftArrow = () => {
        setVisible(false);
        setTimeout(() => {
            if(count-1 < 0) {
                setCount(gameList.length-1);
            } else {
                setCount(count-1);
            }
        }, 200);
    };

    const handleRightArrow = () => {
        setVisible(false);
        setTimeout(() => {
            if(count+1 === gameList.length){
                setCount(0);
            } else {
                setCount(count+1);
            } 
        }, 200);
    };

    return (
        <div className='favorite-container'>
            <div className={visible ? 'fadeIn' : 'fadeOut'}>{renderGame()}</div>
            <NavigateBeforeIcon className='favorite-nav-arrow' fontSize='large' onClick={handleLeftArrow} />
            <NavigateNextIcon className='favorite-nav-arrow' fontSize='large' onClick={handleRightArrow} />
        </div>
    );
};

export default FavoriteList;