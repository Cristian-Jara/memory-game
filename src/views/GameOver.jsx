import { Button } from 'react-bootstrap';
import GameCounter from '../components/GameCounter/GameCounter';
import { useContext } from 'react';
import UserContext from '../hooks/UserContext';

function GameOver({ handleResetGame }) {
  const { userName } = useContext(UserContext);
  return (
    <>
      <GameCounter />
      <div className="game-over-container">
        <h1>Congratulations {userName}, you win!</h1>
        <Button
          className="game-over-container__play-again-button"
          variant="primary"
          onClick={handleResetGame}
        >
          Play again
        </Button>
      </div>
    </>
  );
}

export default GameOver;
