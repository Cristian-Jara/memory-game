import { Form, Button } from "react-bootstrap";
import { handleSaveUserName } from "../utils/helpers";
import { useContext, useRef } from "react";
import UserContext from "../hooks/UserContext";
import { difficultyOptions } from "../utils/constants";

function GameMenu() {
  const {
    userName,
    setUserName,
    setStarted,
    difficulty,
    setDifficulty,
  } = useContext(UserContext);

  const nameInputRef = useRef(null);
  const difficultySelectRef = useRef(null);

  const handleSubmit = (event, value) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const difficultyValue = difficultySelectRef.current.value;
    handleSaveUserName(name, setUserName);
    setDifficulty(difficultyValue ? parseInt(difficultyValue) : null);
    setStarted(true);
  };

  return (
    <div className="game-menu">
      <p>Click on an image to earn points, but don't click on any more than once!</p>
      <Form
        data-testid="game-menu-form"
        className="mb-3"
        onSubmit={handleSubmit}
      >
        <Form.Text className="text-muted mb-3">
          Name
        </Form.Text>
        <Form.Control
          data-testid="name-input"
          ref={nameInputRef}
          required
          placeholder="Enter your name"
          type="text"
          defaultValue={userName}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
        <Form.Text className="text-muted mb-3">
          Choose difficulty
        </Form.Text>
        <Form.Select
          data-testid="difficulty-select"
          ref={difficultySelectRef}
          required
          defaultValue={difficulty}
        >
          {difficultyOptions.map(({ value, label }) => (
            <option key={label} value={value}>{label}</option>
          ))
            }
        </Form.Select>
        <Button
          type="submit"
        >
          Start Game
        </Button>
      </Form>
    </div>
  );
}

export default GameMenu;