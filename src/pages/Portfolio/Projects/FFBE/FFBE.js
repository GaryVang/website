import React, { useState } from "react";
import PortfolioPanel from "../../PortfolioPanel";

import FFBEImgInitial from "./ffbe-builder_initial-view.png";
import FFBEImgCompare from "./ffbe-builder_compare.png";
import FFBEImgUnitSearch from "./ffbe-builder_unit-search.png";
import FFBEImgComplete from "./ffbe-builder_complete.png";
import FFBEImgDataScraper from "./ffbe_data-scraper.png";
import FFBEImgSchema from "./ffbe-builder_schema.jpg";

const FFBE = ({ id, darkTheme }) => {
  const [title] = useState("Final Fantasy Brave Exvius Party Builder Tool");
  const [image] = useState([
    {
      src: FFBEImgInitial,
      alt: "Initial View",
    },
    {
      src: FFBEImgUnitSearch,
      alt: "Search for a Unit",
    },
    {
      src: FFBEImgCompare,
      alt: "Stat Comparison",
    },
    {
      src: FFBEImgComplete,
      alt: "Completely Geared",
    },
    {
      src: FFBEImgSchema,
      alt: "Schema",
    },
    {
      src: FFBEImgDataScraper,
      alt: "FFBE Data Scraper Tool",
    },
  ]);
  const [link] = useState([
    {
      url: "https://ffbe-builder-v.herokuapp.com/",
      title: "Website",
      note: "*Server takes a few seconds to wake up",
    },
    {
      url: "https://github.com/GaryVang/ffbe-party-builder",
      title: "GitHub Repo",
    },
    {
      url: "https://github.com/GaryVang/ffbe-data-scraper",
      title: "Data Scraper Repo"
    }
  ]);
  const [techStack] = useState(
    "React, Javascript, Node.js, Express, PostgreSQL, Git, HTML, CSS"
  );
  const [description] = useState(
    "A single-page application (SPA) developed to assist players in organizing their thoughts and strategies." +
    "\n\nThe front-end is developed in React (v16.13) using a combination of functional and class components," +
    " the back-end using PostgreSQL," +
    " and the RESTful API using Node.js with the Express framework." +
    "\n\nAdditionally, I developed a" +
    " Data Scraping Tool designed to update the database and provide a more readable" +
    " version of the game data."
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

export default FFBE;
