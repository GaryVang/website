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
    "A database management system developed for the Sacramento Sheriff's" +
      " Community Impact Program (SCIP) to assist with all things related to their events:" +
      " membership management, event/program management, and report generation." +
      "\n\nAs a team of 5, we developed this project using the Waterfall methodology over the course of a year." +
      " In addition to being an equal contributor to all stages of the Software Development Life Cycle (SDLC) process," +
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
