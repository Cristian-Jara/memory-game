import { useContext } from "react";
import GameContext from "../../hooks/GameContext";

function GameCounter() {
  const { attempts } = useContext(GameContext);
  return (
    <div
      data-testid="game-counter"
      className="game-counter-container"
    >
      <p className="game-counter-container__text">Correct Attempts: {attempts.correct}</p>
      <p className="game-counter-container__text">Incorrect Attempts: {attempts.incorrect}</p>
    </div>
  );
}

export default GameCounter;
