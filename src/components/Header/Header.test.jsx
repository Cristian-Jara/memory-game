import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import UserContext from '../../hooks/UserContext';

const mockUserContext = {
  userName: 'TestUser',
  started: true,
  setStarted: jest.fn(),
};

describe('Header Component', () => {
  it("renders header with user information when 'started' is true", () => {
    render(
      <UserContext.Provider value={mockUserContext}>
        <Header />
      </UserContext.Provider>
    );

    const headerTitle = screen.getByText('Memory Game');
    const userNameHeader = screen.getByText('TestUser');
    const backButton = screen.getByText('Back to Menu');

    expect(headerTitle).toBeInTheDocument();
    expect(userNameHeader).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
    expect(mockUserContext.setStarted).toHaveBeenCalledWith(false);
  });

  it("renders header without user information when 'started' is false", () => {
    const noUserContext = { ...mockUserContext, started: false };
    render(
      <UserContext.Provider value={noUserContext}>
        <Header />
      </UserContext.Provider>
    );

    const headerTitle = screen.getByText('Memory Game');
    const userNameHeader = screen.queryByText('TestUser');
    const backButton = screen.queryByText('Back to Menu');

    expect(headerTitle).toBeInTheDocument();
    expect(userNameHeader).toBeNull(); // User information should not be present
    expect(backButton).toBeNull(); // Back button should not be present
  });
});
