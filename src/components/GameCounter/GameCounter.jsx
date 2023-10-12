import { useContext } from "react";
import GameContext from "../../hooks/GameContext";

function GameCounter() {
  const { game } = useContext(GameContext);
  return (
    <div className="game-counter">
      <p>Correct Attempts: {game.correctAttempts}</p>
      <p>Incorrect Attempts: {game.incorrectAttempts}</p>
    </div>
  );
}

export default GameCounter;
