import { useContext } from "react";
import GameContext from "../../hooks/GameContext";

function Header() {
  const { userName } = useContext(GameContext);
  return (
    <header>
      <h1>Memory Game</h1>
      {userName && (
      <h3>Hi {userName}!</h3>
      )}
    </header>
  );
}

export default Header;
