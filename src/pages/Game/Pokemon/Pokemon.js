import React, { useState } from 'react';
import GamePanel from '../GamePanel';
import PokemonImg from './pokemon_gs.png';

const PokemonGS = ({}) => {
    const [title] = useState('Pokemon Gold & Silver Version');
    const [image] = useState({
        src: PokemonImg,
        alt: 'Pokemon Gold & Silver'
    })
    const [description] = useState('Description');
    const [message] = useState('Message');

    const style = {
        backgroundColor: 'gold',
        color: 'black',
        fontFamily: 'mason serif'
    };
    

    return (
        <GamePanel
            image={image}
            title={title}
            description={description}
            message={message}
            style={style}
        />
    );
};

export default PokemonGS;