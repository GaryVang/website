import React, { useState } from 'react';
import AboutPanel from '../../AboutPanel';

// import CyclingImg from './cycling.jpg';
import CyclingImg from '../../../Game/Witcher3/witcher_3.jpg';


const Cycling = ({ id }) => {
    const [title] = useState('Bike Trip');
    const [image] = useState(
        {
            src: CyclingImg,
            alt: 'Bike Trip'
        }
        
    );
    // const [link] = useState([
    //     { 
    //         url: 'https://ffbe-builder-v.herokuapp.com/',
    //         title: 'Website',
    //         note: '*Wait few secs for the server to wake up'
    //     },
    //     {
    //         url: 'https://github.com/GaryVang/ffbe-party-builder',
    //         title: 'GitHub Repo'
    //     }
    // ]);
    // const [techStack] = useState('React, Javascript, Node JS, Express, PostgreSQL');
    const [description] = useState(
        // 'A tool for organizing thoughts and strategies.'
        'Cycling has always been a passion of mine. I’m not certain what it is that I enjoy so much, but' +
        ' I have always found it to be calming and relaxing. It’s also a fantastic workout!' +
        '\n\nAs you can probably guess, I mostly prefer scenic routes—trails, unpaved roads, mountainous' +
        ' regions—but I do occasionally ride around the neighborhood from time to time.' +
        '\n\nThis picture was taken at the halfway point of a bike trip in northern California that I took with my family.' +
        ' The halfway point is actually quite beautiful: a clear lake on one side of the road and a view of' +
        ' the region on the other. In case you’re curious, only half of the route was paved.'
    );

    // const style = {
    //     // backgroundColor: 'black',
    //     // color: 'white',
    //     fontFamily: 'mason serif'
    // };

    return (
        <AboutPanel
            // id={id}
            image={image}
            title={title}
            // link={link}
            description={description}
            // techStack={techStack}
            // style={style}
        />
    );
};

export default Cycling;