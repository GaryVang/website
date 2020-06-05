import React, { useState } from 'react';
import GamePanel from '../GamePanel';
import WitcherImg from './witcher_3.jpg';

const Witcher3 = ({}) => {
    const [title] = useState('The Witcher 3');
    const [image] = useState({
        src: WitcherImg,
        alt: 'Geralt of Rivia'
    })
    const [description] = useState('Description');
    const [message] = useState('Message');

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

let x = 0;

const sayBye = () => {
    x++;
    alert(x);
}

const resetBye = () => {
    x = 0;
}

export {sayBye};
export {resetBye};

export default Witcher3;