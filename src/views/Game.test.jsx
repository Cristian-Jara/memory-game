import React from "react";
import { act, render, screen } from "@testing-library/react";
import Game from "./Game";
import UserContext from "../hooks/UserContext";

// Mock some of the dependencies and context values
jest.mock("../services/images", () => ({
  getImages: () =>
    Promise.resolve({
      data: {
        entries: [
          {
            fields: {
              image: {
                uuid: "1",
                url: "test-image-1"
              },
            },
          },
          {
            fields: {
              image: {
                uuid: "2",
                url: "test-image-2"
              },
            },
          },
        ],
      },
    }),
}));

const initialUserContext = {
  difficulty: 2, // A value for difficulty
};

describe("Game Component", () => {
  it("renders the game board when data is loaded", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
      <UserContext.Provider value={initialUserContext}>
        <Game />
      </UserContext.Provider>
      );
    });

    // Ensure that the game board is rendered
    const gameBoard = screen.getByTestId("game-board");
    expect(gameBoard).toBeInTheDocument();
  });
});
