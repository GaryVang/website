import React, { useState } from 'react';
import AboutPanel from '../../AboutPanel';

import ACMImg from '../../../Game/Witcher3/witcher_3.jpg';
// import ACMImg from './acm.jpg';


const ACM = ({}) => {
    const [title] = useState('ACM Officers');
    const [image] = useState(
        {
            src: ACMImg,
            alt: 'ACM Officers'
        }
    );
    
    const [description] = useState(
        'A picture of myself with my friends and fellow Association for Computing Machinery (ACM) officers' +
        ' after hosting a large event.' +
        '\n\nThrough hard work and dedication, we revived the club and made it into one of the largest' +
        ' and most well-known clubs in the engineering department at California State University, Sacramento.'
    );

    return (
        <AboutPanel
            image={image}
            title={title}
            description={description}
        />
    );
};

export default ACM;