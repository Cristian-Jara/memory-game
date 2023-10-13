import { useContext } from "react";
import GameContext from "../../hooks/GameContext";

function GameCounter() {
  const { attempts } = useContext(GameContext);
  return (
    <div
      data-testid="game-counter"
      className="game-counter"
    >
      <p>Correct Attempts: {attempts.correct}</p>
      <p>Incorrect Attempts: {attempts.incorrect}</p>
    </div>
  );
}

export default GameCounter;
