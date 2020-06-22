import React from "react";
import PortfolioList from "./PortfolioList";
import "./Portfolio.css";

const Portfolio = ({ darkTheme }) => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-header">My Portfolio</h2>
      <PortfolioList darkTheme={darkTheme} />
    </div>
  );
};

export default Portfolio;
