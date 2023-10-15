import { useContext } from 'react';
import UserContext from '../../hooks/UserContext';
import { Button } from 'react-bootstrap';
import { ReactComponent as BrainIcon } from '../../assets/brain.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';

function Header() {
  const { userName, started, setStarted } = useContext(UserContext);

  return (
    <header className="header">
      <div className="header__logo-container">
        <BrainIcon className="header__brain-icon" />
        <h1 className="header__game-title">Memory Game</h1>
      </div>
      {started && (
        <div className="header__user-info">
          <div className="header__user-name">
            <UserIcon className="p-2" />
            <span>{userName}</span>
          </div>
          <Button
            className="header__back-to-menu-button"
            variant="primary"
            onClick={() => setStarted(false)}
          >
            Back to Menu
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
