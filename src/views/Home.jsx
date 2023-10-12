import { useContext } from "react";
import Game from "./Game";
import GameMenu from "./GameMenu";
import GameOver from "./GameOver";
import GameContext from "../hooks/GameContext";

function Home() {
  const { game } = useContext(GameContext);
  return (
    <>
      {!game.started && <GameMenu />}
      {game.started && !game.finished && <Game />}
      {game.finished && <GameOver />}
    </>
  );
}

export default Home;
