import React, { useState } from 'react';
import PortfolioPanel from '../../PortfolioPanel';
import WitcherImg from '../FFBE/ffbe-tmp-w3.png';
import BlogImgHome from './blog_home.png';
import BlogImgSignup from './blog_signup.png';

const Blog = ({ id }) => {
    const [title] = useState('Blog Template');
    const [image] = useState([
        {
            src: BlogImgHome,
            alt: 'Home Page'
        },
        {
            src: BlogImgSignup,
            alt: 'Signup'
        },
    ]);
    const [link] = useState([
        {
            url: 'https://blog-template-v.herokuapp.com/',
            title: 'Website',
            note:  '*Wait a few secs for the server to wake up'
        },
        {
            url: 'https://github.com/GaryVang/blog-new-template',
            title: 'GitHub Repo'
        }
    ]);
    const [techStack] = useState('React, Javascript');
    const [description] = useState(
        'A dark-themed blog template utilizing client-side routing.'
    );

    const style = {
        // backgroundColor: 'black',
        // color: 'white',
        fontFamily: 'mason serif'
        // borderColor: 'rgb(129, 4, 4)'
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