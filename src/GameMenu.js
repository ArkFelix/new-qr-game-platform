// src/GameMenu.js
import React from 'react';

const GameMenu = () => {
  const gamesForCouples = ["Love Match", "Couple Trivia", "Heart Quest"];
  const gamesForFriends = ["Friendship Quiz", "Group Puzzles", "Trivia Challenge"];

  return (
    <div>
      <h2>Games for Couples</h2>
      <ul>
        {gamesForCouples.map(game => <li key={game}>{game}</li>)}
      </ul>
      <h2>Games for Friends</h2>
      <ul>
        {gamesForFriends.map(game => <li key={game}>{game}</li>)}
      </ul>
    </div>
  );
};

export default GameMenu;