import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GameOver from './GameOver';
import UserContext from '../hooks/UserContext';
import GameContext from '../hooks/GameContext';

describe('GameOver Component', () => {
  it("renders the game over message and 'Play again' button", () => {
    const mockUserContext = {
      userName: 'TestUser',
    };
    const mockHandleResetGame = jest.fn();
    const mockGameContext = {
      attempts: {
        correct: 5,
        incorrect: 0,
      },
    };

    render(
      <UserContext.Provider value={mockUserContext}>
        <GameContext.Provider value={mockGameContext}>
          <GameOver handleResetGame={mockHandleResetGame} />
        </GameContext.Provider>
      </UserContext.Provider>
    );

    const congratsMessage = screen.getByText('Congratulations TestUser, you win!');
    const playAgainButton = screen.getByText('Play again');

    expect(congratsMessage).toBeInTheDocument();
    expect(playAgainButton).toBeInTheDocument();

    // Simulate clicking the 'Play again' button
    fireEvent.click(playAgainButton);
    expect(mockHandleResetGame).toHaveBeenCalled();
  });
});
