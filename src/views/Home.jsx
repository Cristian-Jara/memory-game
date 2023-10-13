import { useContext } from "react";
import UserContext from "../hooks/UserContext";
import Game from "./Game";
import GameMenu from "./GameMenu";

function Home() {
  const { started, setStarted } = useContext(UserContext);
  return (
    <>
      {!started && <GameMenu setStarted={setStarted} data-testid="game-menu" />}
      {started && <Game setStarted={setStarted} data-testid="game" />}
    </>
  );
}

export default Home;
