import React from "react";
import "./AboutPanel.css";

const AboutPanel = ({ image, description }) => {
  return (
    <article className="about-panel-container">
      <div className="about-panel-img-container">
        <img className="about-panel-img" src={image.src} alt={image.alt} />
      </div>
      <div className="about-panel-desc-container">
        <p>{description}</p>
      </div>
    </article>
  );
};

export default AboutPanel;
