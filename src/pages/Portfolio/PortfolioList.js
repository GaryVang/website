import React, { useState } from "react";
import FFBE from "./Projects/FFBE/FFBE";
import Blog from "./Projects/Blog/Blog";
import SeniorProj from "./Projects/SeniorProject/SeniorProject";
import Scooper from "./Projects/Scooper/Scooper";
import BlogWorking from "./Projects/BlogWorking/BlogWorking";
import "./PortfolioList.css";

const PortfolioList = ({ darkTheme }) => {
  const [portfolioList] = useState([BlogWorking, FFBE, Scooper, SeniorProj, Blog]);

  const renderProject = () => {
    return portfolioList.map((Project, index) => {
      return (
        <React.Fragment>
          <Project key={index} id={index + 1} darkTheme={darkTheme} />
        </React.Fragment>
      );
    });
  };

  return <div className="portfolio-list-container">{renderProject()}</div>;
};

export default PortfolioList;
