import React, { useState } from 'react';
import AboutPanel from '../../AboutPanel';
import TestImg from '../tmp-w3.png';


const Camping = ({ id }) => {
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
        'This picture was taken during my family’s annual summer camping trip that I\'m always looking forward to.' +
        ' It\’s a chance to get away from everything for a few days and spend some quality time with family, eat' +
        ' too much bbq, and enjoy the 80 degree weather—it’s normally over 100 where I used to live.' +
        '\n\nYou can also see the bikes in the background.'
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

export default Camping;