import React, { useState } from 'react';
import GamePanel from '../GamePanel';
import MarioKartImg from './super-mario-kart_cover.jpg';

const SuperMarioKart = ({}) => {
    const [title] = useState('Super Mario Kart');
    const [image] = useState({
        src: MarioKartImg,
        alt: 'Super Mario Kart'
    });
    const [description] = useState(
        'This is Nintendo\'s racing game, but unlike your standard racing game,' +
        ' it comes with a twist—you can pick up random items that can be used to sabotage' +
        ' your opponents. You can literally go from being in first place to last place in a matter of seconds.' +
        '\n\nThe chaos generated from items creates an environment where anyone can win.' +
        ' All it takes is a chain of good or bad luck—red shells—and you can' +
        ' abruptly find yourself either playing catch-up or winning.' +
        '\n\nThis is one of those games that seem too frustrating to be any good,' +
        ' but give it a chance and you\'ll see why so it\'s loved by so many.'
    );
    const [message] = useState(
        '1992 (North America)—Nintendo EAD'
    );

    const style = {
        backgroundColor: 'lightgrey',
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

export default SuperMarioKart;