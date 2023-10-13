import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GameMenu from "./GameMenu";
import UserContext from "../hooks/UserContext";

describe("GameMenu Component", () => {
  it("renders the form and handles user input", () => {
    const mockUserContext = {
      userName: "TestUser",
      setUserName: jest.fn(),
      setStarted: jest.fn(),
      difficulty: 0, // Default difficulty
      setDifficulty: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockUserContext}>
        <GameMenu />
      </UserContext.Provider>
    );

    const nameInput = screen.getByTestId("name-input");
    const difficultySelect = screen.getByTestId("difficulty-select");

    // Simulate entering a new name
    fireEvent.change(nameInput, { target: { value: "NewUser" } });
    expect(nameInput).toHaveValue("NewUser");

    // Simulate selecting a different difficulty
    fireEvent.change(difficultySelect, { target: { value: 5 } });
    expect(difficultySelect).toHaveValue("5");
  
    // Simulate clicking the 'Start' button
    const form = screen.getByTestId("game-menu-form");
    fireEvent.submit(form);
    expect(mockUserContext.setUserName).toHaveBeenCalledWith("NewUser");
    expect(mockUserContext.setStarted).toHaveBeenCalledWith(true);
    expect(mockUserContext.setDifficulty).toHaveBeenCalledWith(5);
  });
});
