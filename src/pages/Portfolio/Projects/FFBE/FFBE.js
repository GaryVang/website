import React, { useState } from 'react';
import PortfolioPanel from '../../PortfolioPanel';
import WitcherImg from './ffbe-tmp-w3.png';
import WitcherImg2 from './ffbe-tmp-w3-2.png';
import FFBEImgInitial from './ffbe-builder_initial-view.png';
import FFBEImgCompare from './ffbe-builder_compare.png';
import FFBEImgUnitSearch from './ffbe-builder_unit-search.png';
import FFBEImgComplete from './ffbe-builder_complete.png';

const FFBE = ({ id }) => {
    const [title] = useState('Final Fantasy Brave Exvius Party Builder Tool');
    const [image] = useState([
        {
            src: FFBEImgInitial,
            alt: 'Initial View'
        },
        {
            src: FFBEImgUnitSearch,
            alt: 'Search for a Unit'
        },
        {
            src: FFBEImgCompare,
            alt: 'Stat Comparison'
        },
        {
            src: FFBEImgComplete,
            alt: 'Completely Geared'
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