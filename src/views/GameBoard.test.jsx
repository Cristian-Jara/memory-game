import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GameBoard from './GameBoard';
import GameContext from '../hooks/GameContext';
import UserContext from '../hooks/UserContext';

const mockUserContext = {
  userName: 'TestUser',
  started: true,
  setStarted: jest.fn(),
};

describe('GameBoard Component', () => {
  it('renders game cards and GameCounter', () => {
    const mockGameContext = {
      cards: [
        { id: 1, matched: false },
        { id: 2, matched: false },
      ],
      attempts: {
        correct: 0,
        incorrect: 0,
      },
      firstCard: null,
      setFirstCard: jest.fn(),
      secondCard: null,
      setSecondCard: jest.fn(),
      stopFlip: false,
    };

    render(
      <UserContext.Provider value={mockUserContext}>
        <GameContext.Provider value={mockGameContext}>
          <GameBoard />
        </GameContext.Provider>
      </UserContext.Provider>
    );

    const gameCounter = screen.getByTestId('game-counter');
    expect(gameCounter).toBeInTheDocument();

    const gameCards = screen.getAllByTestId('game-card');
    expect(gameCards).toHaveLength(2);
  });

  it('calls handleSelectCard when a card is clicked', async () => {
    const mockGameContext = {
      cards: [
        { id: 1, matched: false },
        { id: 2, matched: false },
      ],
      attempts: {
        correct: 0,
        incorrect: 0,
      },
      firstCard: null,
      setFirstCard: jest.fn(),
      secondCard: null,
      setSecondCard: jest.fn(),
      stopFlip: false,
    };

    render(
      <UserContext.Provider value={mockUserContext}>
        <GameContext.Provider value={mockGameContext}>
          <GameBoard />
        </GameContext.Provider>
      </UserContext.Provider>
    );

    const gameCardButtons = screen.getAllByTestId('game-card-button');
    expect(gameCardButtons).toHaveLength(2);

    // Simulate clicking one card
    fireEvent.click(gameCardButtons[0]);
    expect(mockGameContext.setFirstCard).toHaveBeenCalledWith(mockGameContext.cards[0]);
    expect(mockGameContext.setSecondCard).not.toHaveBeenCalled();
  });

  it('calls handleSelectCard when a second card is clicked', async () => {
    const mockGameContext = {
      cards: [
        { id: 1, matched: false },
        { id: 2, matched: false },
      ],
      attempts: {
        correct: 0,
        incorrect: 0,
      },
      firstCard: { id: 1, matched: false },
      setFirstCard: jest.fn(),
      secondCard: null,
      setSecondCard: jest.fn(),
      stopFlip: false,
    };

    render(
      <UserContext.Provider value={mockUserContext}>
        <GameContext.Provider value={mockGameContext}>
          <GameBoard />
        </GameContext.Provider>
      </UserContext.Provider>
    );

    const gameCardButtons = screen.getAllByTestId('game-card-button');
    expect(gameCardButtons).toHaveLength(2);

    // Simulate clicking one card
    fireEvent.click(gameCardButtons[1]);
    expect(mockGameContext.setFirstCard).not.toHaveBeenCalled();
    expect(mockGameContext.setSecondCard).toHaveBeenCalledWith(mockGameContext.cards[1]);
  });
});
