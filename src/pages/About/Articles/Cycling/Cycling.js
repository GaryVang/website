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
        'Cycling has always been a passion of mine. I mostly prefer trails and dirt roads but do' +
        ' enjoy just riding around the neighborhood from time to time.' +
        ' I\'m not too sure what it is about cycling that I enjoy so much, but there\'s just something' +
        ' magical about riding a bike that\'s relaxing to me.' +
        '\n\nThis picture was taken at the halfway point of a bike trip that my family and I had planned.' +
        ' This was up in northern California, so only half of the route was paved.'
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