import React, { useState } from "react";
import PortfolioPanel from "../../PortfolioPanel";

import SCIPImg from "./scip.png";

const SeniorProject = ({ id, darkTheme }) => {
  const [title] = useState("Member Database Management System");
  const [image] = useState([
    {
      src: SCIPImg,
      alt: "Sheriff's Community Impact Program",
    },
  ]);
  const [link] = useState([
    {
      url: "https://sacscip.org/",
      title: "Organization's Website",
    },
  ]);
  const [techStack] = useState("Microsoft Access, VBA, Microsoft SQL");
  const [description] = useState(
    "A database management system built by a team of 5 for the Sacramento Sheriff's" +
      " Community Impact Program (SCIP) over the course of a year." +
      "\n\nIn addition to being an equal contributor to all stages of the SDLC process," +
      " I was responsible for the Program Management Feature which allowed users to" +
      " create and manage their events."
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

export default SeniorProject;
