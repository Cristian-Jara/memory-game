import { Button } from "react-bootstrap";
import GameCounter from "../components/GameCounter/GameCounter";
import { useContext } from "react";
import UserContext from "../hooks/UserContext";

function GameOver({
  handleResetGame,
}) {
  const { userName } = useContext(UserContext);
  return (
    <div>
      <h1>Congratulations {userName}, you win!</h1>
      <p>Your score is:</p>
      <GameCounter />
      <Button variant="primary" onClick={handleResetGame}>Play again</Button>
    </div>
  );
}

export default GameOver;
