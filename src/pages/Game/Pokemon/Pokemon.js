import React, { useState } from 'react';
import GamePanel from '../GamePanel';
import PokemonImg from './pokemon_gs.png';

const PokemonGS = ({}) => {
    const [title] = useState('Pokemon Gold & Silver Version');
    const [image] = useState({
        src: PokemonImg,
        alt: 'Pokemon Gold & Silver'
    });
    const [description] = useState(
        ' As the sequel to the popular Gameboy games, Pokemon Red Version and Pokemon Blue Version,' +
        ' no one had any idea where the series was headed, but boy did this sequel deliver.' +
        ' Not only did it include everything from its predecessor, it also added even more content on top of it.' +
        ' \n\nAs a child, this was unheard of because a majority of sequels were' + 
        ' created with the idea that they were to be a seperate entity and any connections to' +
        ' their predecessors were to be kept to a minimum. As of today, G&S and their remakes—Heart Gold' +
        ' and Soul Silver—are the only games in the series to incorporate a predecessor\'s content' +
        ' in such detail.'
    );
    const [message] = useState(
        '2000 (North America)—Game Freak'
    );

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