import React from "react";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css";

// import AvatarImg from "../Game/Witcher3/witcher_3.jpg";
import AvatarImg from "./avatar.jpg";

const Home = ({ darkTheme }) => {
  return (
    <section className="home-container">
      <header>
        <h2 className="home-header">Welcome,</h2>
      </header>
      <section className="home-section-1-container">
        <h2 className="home-section-1-header">I am Gary Vang</h2>
        <div className="home-avatar-container">
          <img className="home-avatar" src={AvatarImg} alt="home-avatar" />
        </div>
        <div className="home-section-1-text-container">
          <h4 className="home-section-1-text">
            And I'm a Developer, Gamer, and an occasional Cyclist
          </h4>
          <div className="home-section-1-text-contact-container">
            <h5>
              Email: <span className="fw-normal">GaryLVang@gmail.com</span>
            </h5>
            {/* <h5 className='test-3'>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/garyvang/"
                className={!darkTheme ? "light-link" : "dark-link"}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/garyvang/
              </a>
            </h5>
            <h5>
              GitHub:{" "}
              <a
                href="https://github.com/GaryVang"
                className={!darkTheme ? "light-link" : "dark-link"}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/GaryVang
              </a>
            </h5> */}
            <h5 className='test-3'>
              <a
                href="https://www.linkedin.com/in/garyvang/"
                className={!darkTheme ? "light-link" : "dark-link"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className='link-icon icon-linkedin' style={{fontSize: '32px'}} />
              </a>
              <a
                href="https://github.com/GaryVang"
                className={!darkTheme ? "light-link" : "dark-link"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <GitHubIcon className='link-icon icon-github' style={{fontSize: '28px'}} /> */}
                <GitHubIcon className={'link-icon ' + (!darkTheme ? "icon-github-dark" : "icon-github-light")} style={{fontSize: '28px'}} />
              </a>
            </h5>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
