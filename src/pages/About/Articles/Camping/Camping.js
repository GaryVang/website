import React, { useState } from 'react';
import AboutPanel from '../../AboutPanel';

// import CampingImg from './camping.jpg';
import CampingImg from '../../../Game/Witcher3/witcher_3.jpg';


const Camping = ({}) => {
    const [title] = useState('Camping');
    const [image] = useState(
        {
            src: CampingImg,
            alt: 'Initial View'
        }
    );
    
    const [description] = useState(
        'This picture was taken during my family’s annual summer camping trip that I\'m always looking forward to.' +
        '\n\nTo me, camping is an opportunity to get away from everything for a few days and spend some quality time with family, eat' +
        ' too much bbq, and enjoy the 80 degree weather—it’s normally over 100 where I used to live.' +
        '\n\nYou can also see the bikes in the background.'
    );

    return (
        <AboutPanel
            image={image}
            title={title}
            description={description}
        />
    );
};

export default Camping;