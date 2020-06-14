import React, { useState } from 'react';
import GamePanel from '../GamePanel';

import BioshockImgBD from './bioshock_bd-ls.jpg';

const Bioshock = ({}) => {
    const [title] = useState('Bioshock');
    const [image] = useState({
        src: BioshockImgBD,
        alt: 'Bioshock'
    })
    const [description] = useState(
        'I received this game as a Christmas present, but at the time, I wasn\'t too fond of' +
        ' horror games, so I shelved it for 6-12 months without even opening the case.' +
        ' When I finally did play it, I became completely engrossed in its atmosphere.' +
        ' It\'s not too often that a game has changed my perspective on something, but' +
        ' this game completely changed my view of the horror genre with its beautifully constructed' +
        ' environment and atmosphere.' +
        '\n\nBioshock is set in a place called Rapture, a former utopia turned dystopia.' +
        ' As such, Rapture contains all the advancements of the former and all the decimation brought on' +
        ' by the latter.'
    );
    const [message] = useState(
        '2007—2K Boston and 2K Australia'
    );

    const style = {
        // backgroundColor: 'lightblue',
        background: 'linear-gradient(0deg, rgba(21,141,167,1) 0%, rgba(118,232,255,1) 100%)',
        // background: 'linear-gradient(344deg, rgba(0,97,176,1) 0%, rgba(0,175,210,1) 100%)',
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

export default Bioshock;