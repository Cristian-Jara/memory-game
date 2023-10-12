import GameCounter from "../components/GameCounter/GameCounter";

function GameOver() {
  return (
    <div>
      <h1>Congrulations, you win!</h1>
      <p>Your score is:</p>
      <GameCounter />
      <button>Play again</button>
    </div>
  );
}

export default GameOver;
