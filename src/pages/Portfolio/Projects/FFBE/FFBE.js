import React, { useState } from 'react';
import PortfolioPanel from '../../PortfolioPanel';

import FFBEImgInitial from './ffbe-builder_initial-view.png';
import FFBEImgCompare from './ffbe-builder_compare.png';
import FFBEImgUnitSearch from './ffbe-builder_unit-search.png';
import FFBEImgComplete from './ffbe-builder_complete.png';
import FFBEImgDataScraper from './ffbe_data-scraper.png';
import FFBEImgSchema from './ffbe-builder_schema.jpg';

const FFBE = ({ id, darkTheme }) => {
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
        },
        {
            src: FFBEImgSchema,
            alt: 'Schema'
        },
        {
            src: FFBEImgDataScraper,
            alt: 'FFBE Data Scraper Tool'
        }
    ]);
    const [link] = useState([
        { 
            url: 'https://ffbe-builder-v.herokuapp.com/',
            title: 'Website',
            note: '*Server takes a few seconds to wake up'
        },
        {
            url: 'https://github.com/GaryVang/ffbe-party-builder',
            title: 'GitHub Repo'
        }
    ]);
    const [techStack] = useState('React, Javascript, Node JS, Express, PostgreSQL');
    const [description] = useState(
        'A single-page application (SPA) tool for organizing thoughts and strategies. Just simply search for a unit and start gearing for your next boss fight!'
    );

    const style = {
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
            darkTheme={darkTheme}
        />
    );
};

export default FFBE;