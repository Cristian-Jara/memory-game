import { Form, InputGroup, Button } from "react-bootstrap";
import { handleSaveUserName } from "../utils/helpers";
import { useContext } from "react";
import GameContext from "../hooks/GameContext";

function GameMenu() {
  const { game, setGame } = useContext(GameContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const userName = event.target[0].value;
    handleSaveUserName(userName, setGame);
  }
  return (
    <div className="game-menu">
      <p>Click on an image to earn points, but don't click on any more than once!</p>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <InputGroup className="mb-3" hasValidation>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            required
            placeholder="Username"
            type="text"
            defaultValue={game.userName}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>
        <Button type="submit">Start Game</Button>
      </Form>
    </div>
  );
}

export default GameMenu;