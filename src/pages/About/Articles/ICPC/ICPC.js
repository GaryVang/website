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
        'This is a picture of the Spring Programming Contest I organized.' +
        '\n\nThis was the largest event for our club that semester and required' +
        ' months of planning and work.' +
        ' All of that hard work resulted in one of the largest turnouts and the largest' +
        ' number of lower-division participants that the club had seen in almost a decade.'
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