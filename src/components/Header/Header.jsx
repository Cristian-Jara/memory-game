import { useContext } from "react";
import UserContext from "../../hooks/UserContext";
import { Button } from "react-bootstrap";

function Header() {
  const { userName, started, setStarted } = useContext(UserContext);
  return (
    <header>
      <h1>Memory Game</h1>
      {started && (
        <>
          <h3>Hi {userName}!</h3>
          <Button variant="primary" onClick={() => setStarted(false)}>Back to Menu</Button>
        </>
      )}
    </header>
  );
}

export default Header;
