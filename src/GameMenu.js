import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameMenu = () => {
  const navigate = useNavigate();

  const gamesForCouples = [
    { name: "Love Match", path: "/love-match" },
    { name: "Couple Trivia", path: "/couple-trivia" },
    { name: "Heart Quest", path: "/heart-quest" }
  ];

  const gamesForFriends = [
    { name: "Friendship Quiz", path: "/friendship-quiz" },
    { name: "Group Puzzles", path: "/group-puzzles" },
    { name: "Trivia Challenge", path: "/trivia-challenge" }
  ];

  const handleGameSelect = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h2>Games for Couples</h2>
      <ul>
        {gamesForCouples.map(game => (
          <li key={game.name} onClick={() => handleGameSelect(game.path)}>
            {game.name}
          </li>
        ))}
      </ul>
      <h2>Games for Friends</h2>
      <ul>
        {gamesForFriends.map(game => (
          <li key={game.name} onClick={() => handleGameSelect(game.path)}>
            {game.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameMenu;
