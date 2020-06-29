import React, { useState } from "react";
import "./PortfolioPanel.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CloseIcon from "@material-ui/icons/Close";

const PortfolioPanel = ({
  id,
  image,
  title,
  description,
  link,
  style,
  techStack,
  darkTheme,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgFullScreen, setImgFullScreen] = useState(false);

  const handleLeftArrow = () => {
    if (imgIndex === 0) {
      setImgIndex(image.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  const handleRightArrow = () => {
    if (imgIndex === image.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  const handleImgClickFS = () => {
    setImgFullScreen(true);
  };

  const handleImgClickFSClose = () => {
    setImgFullScreen(false);
  };

  const renderLinks = () => {
    return link.map((link) => (
      <div>
        <a
          className={
            darkTheme
              ? "portfolio-info-link dark-link"
              : "portfolio-info-link light-link"
          }
          href={link.url}
        >
          {link.title}
        </a>
        {link.note ? (
          <span className="portfolio-info-link-note"> {link.note}</span>
        ) : null}
      </div>
    ));
  };

  const renderPortfolio = () => {
    if (id % 2 === 1) {
      return (
        <article className="portfolio-panel-container" style={style}>
          <div className="portfolio-panel-img-container p-shadow-top">
            <img
              className="portfolio-panel-img"
              src={image[imgIndex].src}
              alt={image[imgIndex].alt}
              onClick={handleImgClickFS}
            />
            <div className="portfolio-panel-img-bot-wrapper">
              <NavigateBeforeIcon
                className="portfolio-nav-arrow"
                fontSize="large"
                onClick={handleLeftArrow}
              />
              <label className="portfolio-panel-img-title">
                {image[imgIndex].alt}
              </label>
              <NavigateNextIcon
                className="portfolio-nav-arrow"
                fontSize="large"
                onClick={handleRightArrow}
              />
            </div>
          </div>
          <div className="portfolio-info-container p-shadow-bot">
            <h1 className='portfolio-info-title'>{title}</h1>
            <h4> {renderLinks()}</h4>
            <h4>
              Tech Stack:{" "}
              <span className="portfolio-info-tech">{techStack}</span>
            </h4>
            <h4 className="portfolio-info-desc">{description}</h4>
          </div>
          {imgFullScreen ? (
            <div className="portfolio-panel-img-fs-container">
              <img
                className="portfolio-panel-img-fs"
                src={image[imgIndex].src}
                alt={image[imgIndex].alt}
                onClick={handleImgClickFSClose}
              />
              <CloseIcon
                className="portfolio-panel-img-fs-btn-close"
                onClick={handleImgClickFSClose}
              />
            </div>
          ) : null}
        </article>
      );
    } else {
      return (
        <article className="portfolio-panel-container">
          <div className="portfolio-info-container p-shadow-top" style={style}>
            <h1 className='portfolio-info-title'>{title}</h1>
            <h4>{renderLinks()}</h4>
            <h4>
              Tech Stack:{" "}
              <span className="portfolio-info-tech">{techStack}</span>
            </h4>
            <h4 className="portfolio-info-desc">{description}</h4>
          </div>
          <div className="portfolio-panel-img-container p-shadow-bot">
            <img
              className="portfolio-panel-img"
              src={image[imgIndex].src}
              alt={image[imgIndex].alt}
              onClick={handleImgClickFS}
              style={style}
            />
            <div className="portfolio-panel-img-bot-wrapper">
              <NavigateBeforeIcon
                className="portfolio-nav-arrow"
                fontSize="large"
                onClick={handleLeftArrow}
              />
              <label className="portfolio-panel-img-title">
                {image[imgIndex].alt}
              </label>
              <NavigateNextIcon
                className="portfolio-nav-arrow"
                fontSize="large"
                onClick={handleRightArrow}
              />
            </div>
          </div>
          {imgFullScreen ? (
            <div className="portfolio-panel-img-fs-container">
              <img
                className="portfolio-panel-img-fs"
                src={image[imgIndex].src}
                alt={image[imgIndex].alt}
                onClick={handleImgClickFSClose}
              />
              <CloseIcon
                className="portfolio-panel-img-fs-btn-close"
                onClick={handleImgClickFSClose}
              />
            </div>
          ) : null}
        </article>
      );
    }
  };

  return <React.Fragment>{renderPortfolio()}</React.Fragment>;
};

export default PortfolioPanel;
