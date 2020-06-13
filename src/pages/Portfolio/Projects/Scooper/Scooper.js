import React, { useState } from 'react';
import PortfolioPanel from '../../PortfolioPanel';
import WitcherImg from '../FFBE/ffbe-tmp-w3.png';
import UMLImg from './UML-Diagram.png';
import ScoopImgGameplay from './scoop_gameplay.png';
import ScoopImgInitial from './scoop_initial-view.png';

const Scooper = ({ id }) => {
    const [title] = useState(
        '2D Scoop Game'
    );
    const [image] = useState([
        {
            src: ScoopImgInitial,
            alt: 'Start Screen'
        },
        {
            src: ScoopImgGameplay,
            alt: 'Gameplay'
        },
        {
            src: UMLImg,
            alt: 'UML Diagram'
        },
    ]);
    const [link] = useState('https://github.com/GaryVang/2D-Scoop-Game');
    const [techStack] = useState('Java');
    const [description] = useState(
        'A 2D game designed using object-oriented programming (OOP) and utilizing multiple design patterns: MVC, Command, Singleton, Factory, etc.'
    );

    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'mason serif'
    };

    return (
        <PortfolioPanel
            id={id}
            image={image}
            title={title}
            link={link}
            description={description}
            techStack={techStack}
            style={style}
        />
    );
};

export default Scooper;