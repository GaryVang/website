import React, { useState } from 'react';
import PortfolioPanel from '../../PortfolioPanel';
import WitcherImg from '../FFBE/ffbe-tmp-w3.png';

const SeniorProject = ({ id }) => {
    const [title] = useState('Member Database Management System');
    const [image] = useState([
        {
            src: WitcherImg,
            alt: 'No image so here\'s Geralt (prob change)'
        }
    ]);
    const [link] = useState([
        {
            url:'https://sacscip.org/',
            title: 'Organization\'s Website'
        }
    ]);
    const [techStack] = useState('Microsoft Access, VBA, Microsoft SQL');
    const [description] = useState(
        'A database management system built by a team of 5 for the Sacramento Sheriff\'s Community Impact Program (SCIP). I was responsible for the Program Management Feature.'
    );

    const style = {
        // backgroundColor: 'black',
        // color: 'white',
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

export default SeniorProject;