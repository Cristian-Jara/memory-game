import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GameCard from "./GameCard";

describe("GameCard Component", () => {
  const mockCard = {
    id: 1,
    url: "test-image-url",
  };
  const mockHandleSelectCard = jest.fn();

  it("renders a card with 'Flip' button", () => {
    render(
      <GameCard
        card={mockCard}
        handleSelectCard={mockHandleSelectCard}
        flipped={false}
        stopFlip={false}
      />
    );

    const flipButton = screen.getByText("Flip");
    const cardImage = screen.getByAltText("Card Image");

    expect(flipButton).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();

    fireEvent.click(flipButton);
    expect(mockHandleSelectCard).toHaveBeenCalledWith(mockCard);
  });

  it("disables 'Flip' button when stopFlip is true", () => {
    render(
      <GameCard
        card={mockCard}
        handleSelectCard={mockHandleSelectCard}
        flipped={false}
        stopFlip={true}
      />
    );

    const flipButton = screen.getByText("Flip");

    expect(flipButton).toBeDisabled();
  });

  it("applies the flipped class when flipped is true", () => {
    render(
      <GameCard
        card={mockCard}
        handleSelectCard={mockHandleSelectCard}
        flipped={true}
        stopFlip={false}
      />
    );

    const cardInner = screen.getByTestId("game-card-inner");

    expect(cardInner).toHaveClass("game-card-inner--flipped");
  });
});
