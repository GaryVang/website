import React from "react";
import "./Game.css";
import FavoriteList from "./FavoriteList";

const Game = ({}) => {
  return (
    <section className="game-container">
      <h2 className="game-header">A List of My Favorite Video Games</h2>
      <FavoriteList />
    </section>
  );
};

export default Game;
