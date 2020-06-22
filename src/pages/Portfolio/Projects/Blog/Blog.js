import React, { useState } from 'react';
import PortfolioPanel from '../../PortfolioPanel';

import BlogImgHome from './blog_home.png';
import BlogImgSignup from './blog_signup.png';

const Blog = ({ id, darkTheme }) => {
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
            note:  '*Server takes a few seconds to wake up'
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
            darkTheme={darkTheme}
        />
    );
};

export default Blog;