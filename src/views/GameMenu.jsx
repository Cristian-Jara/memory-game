import { Form, Button } from 'react-bootstrap';
import { handleSaveUserName } from '../utils/helpers';
import { useContext, useRef } from 'react';
import UserContext from '../hooks/UserContext';
import { difficultyOptions } from '../utils/constants';

function GameMenu() {
  const { userName, setUserName, setStarted, difficulty, setDifficulty } = useContext(UserContext);

  const nameInputRef = useRef(null);
  const difficultySelectRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const difficultyValue = difficultySelectRef.current.value;
    handleSaveUserName(name, setUserName);
    setDifficulty(difficultyValue ? parseInt(difficultyValue) : null);
    setStarted(true);
  };

  return (
    <div className="game-menu">
      <Form data-testid="game-menu-form" className="game-menu__form mb-3" onSubmit={handleSubmit}>
        <Form.Text className="game-menu__title mb-3">Welcome to the Memory Game!</Form.Text>
        <Form.Text className="text-muted mb-3">Name</Form.Text>
        <Form.Control
          data-testid="name-input"
          ref={nameInputRef}
          required
          placeholder="Enter your name"
          type="text"
          defaultValue={userName}
          className="mb-3"
        />
        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
        <Form.Text className="text-muted mb-3">Choose difficulty</Form.Text>
        <Form.Select
          data-testid="difficulty-select"
          ref={difficultySelectRef}
          required
          defaultValue={difficulty}
        >
          {difficultyOptions.map(({ value, label }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </Form.Select>
        <Button className="game-menu__start-button mt-5" type="submit">
          Start Game
        </Button>
      </Form>
    </div>
  );
}

export default GameMenu;
