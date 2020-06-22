import React, { useState } from 'react';
import AboutPanel from '../../AboutPanel';

// import CyclingImg from './cycling.jpg';
import CyclingImg from '../../../Game/Witcher3/witcher_3.jpg';


const Cycling = ({}) => {
    const [title] = useState('Bike Trip');
    const [image] = useState(
        {
            src: CyclingImg,
            alt: 'Bike Trip'
        }
    );
    
    const [description] = useState(
        'Cycling has always been a passion of mine. I’m not certain what it is that I enjoy so much, but' +
        ' I have always found it to be calming and relaxing. It’s also a fantastic workout!' +
        '\n\nAs you can probably guess, I mostly prefer scenic routes—trails, unpaved roads, mountainous' +
        ' regions—but I do occasionally ride around the neighborhood from time to time.' +
        '\n\nThis picture was taken at the halfway point of a bike trip in northern California that I took with my family.' +
        ' The halfway point is actually quite beautiful: a clear lake on one side of the road and a view of' +
        ' the region on the other. In case you’re curious, only half of the route was paved.'
    );

    return (
        <AboutPanel
            image={image}
            title={title}
            description={description}
        />
    );
};

export default Cycling;