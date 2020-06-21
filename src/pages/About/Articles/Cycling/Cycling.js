import React, { useState } from 'react';
import AboutPanel from '../../AboutPanel';
import TestImg from '../tmp-w3.png';


const Cycling = ({ id }) => {
    const [title] = useState('Final Fantasy Brave Exvius Party Builder Tool');
    const [image] = useState(
        {
            src: TestImg,
            alt: 'Initial View'
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
        ' regions—but do occasionally ride around the neighborhood from time to time.' +
        '\n\nThis picture was taken at the halfway point of a bike trip that I took with my family up in Northern' +
        ' California. The halfway point is actually quite beautiful: a lake on one side of the road and a view of' +
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