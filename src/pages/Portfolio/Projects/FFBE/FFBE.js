import React, { useState } from 'react';
import PortfolioPanel from '../../PortfolioPanel';
import WitcherImg from './ffbe-tmp-w3.png';
import WitcherImg2 from './ffbe-tmp-w3-2.png';

const FFBE = ({ id }) => {
    const [title] = useState('Final Fantasy Brave Exvius Party Builder Tool');
    const [image] = useState([
        {
            src: WitcherImg,
            alt: 'Geralt of Rivia'
        },
        {
            src: WitcherImg2,
            alt: 'Silver & Steel'
        }
    ]);
    const [link] = useState('https://ffbe-builder-v.herokuapp.com/');
    const [techStack] = useState('React, Javascript, Node JS, Express, PostgreSQL');
    const [description] = useState(
        // 'A tool for organizing thoughts and strategies.'
        'A tool for organizing thoughts and strategies. Just simply search for a unit and start gearing for your next boss fight!'
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

export default FFBE;