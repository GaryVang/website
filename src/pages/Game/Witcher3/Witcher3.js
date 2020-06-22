import React, { useState } from 'react';
import GamePanel from '../GamePanel';
import WitcherImg from './witcher_3.jpg';

const Witcher3 = ({}) => {
    const [title] = useState('The Witcher 3');
    const [image] = useState({
        src: WitcherImg,
        alt: 'Geralt of Rivia'
    });
    const [description] = useState(
        'As the third addition to the series, this game had a lot to live up to.' +
        ' Where its prequel was defined by its 2 distinct player-chosen paths, this game was to be defined' +
        ' by its freedom in the form of an open-world game design.' + 
        ' \n\nThe actual gameplay is quite similar to its' +
        ' predecessor but with some balances changes and a few unlockable enhancements for combat abilities. For' +
        ' example, the fire spell can now be eventually upgraded to shoot a stream of fire.' +
        ` \n\nIn terms of story, I wouldn't call it amazing, but it still ends the tale of` +
        ' Geralt of Rivia—the Butcher of Blaviken, the Kingslayer, the Mutant, the White Wolf, and many other' +
        ' monikers—quite satisfyingly.'
    );
    const [message] = useState(
        '2015—CD Projekt Red'
    );

    const style = {
        backgroundColor: 'black',
        color: 'white',
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

export default Witcher3;