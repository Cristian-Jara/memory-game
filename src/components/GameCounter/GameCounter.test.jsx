import React from "react";
import { render, screen } from "@testing-library/react";
import GameCounter from "./GameCounter";
import GameContext from "../../hooks/GameContext";

const mockGameContext = {
  attempts: {
    correct: 3,
    incorrect: 2,
  },
};

describe("GameCounter Component", () => {
  it("renders the correct number of attempts", () => {
    render(
      <GameContext.Provider value={mockGameContext}>
        <GameCounter />
      </GameContext.Provider>
    );

    const correctAttemptsText = screen.getByText("Correct Attempts: 3");
    const incorrectAttemptsText = screen.getByText("Incorrect Attempts: 2");

    expect(correctAttemptsText).toBeInTheDocument();
    expect(incorrectAttemptsText).toBeInTheDocument();
  });
});
