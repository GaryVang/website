import React, { useState } from 'react';
import PortfolioPanel from '../../PortfolioPanel';
import WitcherImg from '../FFBE/ffbe-tmp-w3.png';

const Blog = ({ id }) => {
    const [title] = useState('Blog Template');
    const [image] = useState([
        {
            src: WitcherImg,
            alt: 'Geralt of Rivia'
        }
    ]);
    const [link] = useState('https://addlink');
    const [techStack] = useState('React, Javascript');
    const [description] = useState(
        'A dark-themed blog template utilizing client-side routing.'
    );

    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'mason serif'
    };
    
    return (
        <PortfolioPanel
            id={id}
            image={image}
            title={title}
            link={link}
            description={description}
            techStack={techStack}
            style={style}
        />
    );
};

export default Blog;