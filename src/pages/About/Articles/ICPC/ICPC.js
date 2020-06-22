import React, { useState } from 'react';
import AboutPanel from '../../AboutPanel';

import ICPCImg from './icpc.jpg';
// import ICPCImg from '../../../Game/Witcher3/witcher_3.jpg';

const ICPC = ({}) => {
    const [title] = useState('ICPC');
    const [image] = useState(
        {
            src: ICPCImg,
            alt: 'ICPC'
        }
    );
    
    const [description] = useState(
        'As the Event Coordinator of ACM, I was responsible for the events—two of which were' +
        ' the local International Collegiate Programming Contest (ICPC) and the Spring Programming Contest.' +
        ' Both took an enormous amount of time to plan and organize.' +
        '\n\nAll of that hard work resulted in one of the largest turnouts and the largest turnout of lower-division' +
        ' students that the school had seen in the last decade.' +
        '\n\nThis picture was taken at the end of the Spring Programming Contest.'
    );

    return (
        <AboutPanel
            image={image}
            title={title}
            description={description}
        />
    );
};

export default ICPC;