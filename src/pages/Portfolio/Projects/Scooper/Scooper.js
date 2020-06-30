import React, { useState } from "react";
import PortfolioPanel from "../../PortfolioPanel";

import UMLImg from "./UML-Diagram.png";
import ScoopImgGameplay from "./scoop_gameplay.png";
import ScoopImgInitial from "./scoop_initial-view.png";

const Scooper = ({ id, darkTheme }) => {
  const [title] = useState("2D Scoop Game");
  const [image] = useState([
    {
      src: ScoopImgInitial,
      alt: "Start Screen",
    },
    {
      src: ScoopImgGameplay,
      alt: "Gameplay",
    },
    {
      src: UMLImg,
      alt: "UML Diagram",
    },
  ]);
  const [link] = useState([
    {
      url: "https://github.com/GaryVang/2D-Scoop-Game",
      title: "GitHub Repo",
    },
  ]);
  const [techStack] = useState("Java");
  const [description] = useState(
    "A 2D game designed using object-oriented programming (OOP) and" +
    " utilizing multiple design patterns: MVC, Command, Singleton, Factory, etc." +
    "\n\nShapes represent interactable game objects. The game can be played using" +
    " the keyboard or graphical user interface."
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

export default Scooper;
