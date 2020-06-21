import React, { useState } from 'react';
import AboutPanel from '../../AboutPanel';
import TestImg from '../tmp-w3.png';


const ICPC = ({ id }) => {
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
        'As the Event Coordinator of ACM, I was responsible for the events—two of which were' +
        ' the local International Collegiate Programming Contest (ICPC) and the Spring Programming Contest.' +
        ' Both took an enormous amount of time to plan and organize.' +
        '\n\nAll of that hard work resulted in one of the largest turnouts and the largest turnout of lower-division' +
        ' students that the school had seen in the last decade.' +
        '\n\nThis picture was taken at the end of the Spring Programming Contest.'
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

export default ICPC;