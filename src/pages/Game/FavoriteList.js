import React, { useState, useEffect } from 'react';
import './FavoriteList.css';
import Witcher3 from './Witcher3/Witcher3';
// import * as sayBye from './Witcher3/Witcher3'; // Remove after tests
import PokemonGS from './Pokemon/Pokemon';
import Bioshock from './Bioshock/Bioshock';
import SuperMarioKart from './SuperMarioKart/SuperMarioKart';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const FavoriteList = ({}) => {

    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, [visible]);
    // const [gameList] = useState([<Witcher3/>, <PokemonGS/>]);
    const [gameList] = useState([Witcher3, PokemonGS, Bioshock, SuperMarioKart]);
    const [count, setCount] = useState(0);
    

    const renderGame = () => {
        // return gameList[count];
        let Component = gameList[count];
        return <Component/>;
    }

    const handleLeftArrow = () => {
        // sayBye.sayBye();
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
        // sayBye.resetBye();
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
            <div className='favorite-nav-container'>
                <NavigateBeforeIcon className='favorite-nav-arrow' fontSize='large' onClick={handleLeftArrow} />
                <NavigateNextIcon className='favorite-nav-arrow' fontSize='large' onClick={handleRightArrow} />
            </div>
            
        </div>
    );
};

export default FavoriteList;