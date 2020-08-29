import React from "react";
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
            <h5>
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
            </h5>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
