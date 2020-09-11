import React, { useState } from "react";
import PortfolioPanel from "../../PortfolioPanel";

import BlogImgHome from "./blog_home.png";
import BlogPostOverlay from "./blog_post_overlay.png";
import BlogCreatePost from "./blog_create_post.png";
import BlogSignin from "./blog_signin.png";
import BlogUserProfile from "./blog_userprofile.png";

const Blog = ({ id, darkTheme }) => {
  const [title] = useState("Blogging Website");
  const [image] = useState([
    {
      src: BlogImgHome,
      alt: "Home Page",
    },
    {
      src: BlogPostOverlay,
      alt: "Post Overlay",
    },
    {
        src: BlogSignin,
        alt: "Sign in",
    },
    {
        src: BlogUserProfile,
        alt: "User Profile",
    },
    {
        src: BlogCreatePost,
        alt: "Create a Post",
    },
  ]);
  const [link] = useState([
    {
      url: "https://blog-frontend-1.herokuapp.com/",
      title: "Website",
      note: "*Server takes a few seconds to wake up",
    },
    {
      url: "https://github.com/GaryVang/blog",
      title: "GitHub Repo",
    },
  ]);
  const [techStack] = useState("React, HTML5, CSS3, Node.js, Express, PostgreSQL");
  const [description] = useState(
    "A blogging site/platform designed using the latest tech." +

    "\n\nIt has a front-end, back-end, and RESTful API." +
    " The components are developed using React Hooks and are designed to be reusable." +
    
    "\n\nThe site allows users to create accounts and posts." +
    " User passwords are hashed prior to being stored in the database." +
    " User sessions are managed through secure cookies and user authentication" +
    " is managed by the API." +
    
    "\n\nEverything is hosted on Heroku."
  );

  const style = {
    fontFamily: "mason serif",
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