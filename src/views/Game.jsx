import { useContext } from "react";
import GameContext from "../hooks/GameContext";
import { Row } from "react-bootstrap";
import GameCard from "../components/GameCard/GameCard";
import GameCounter from "../components/GameCounter/GameCounter";

function Game() {
  const { cards } = useContext(GameContext);
  return (
    <>
      <GameCounter />
      <Row>
        {cards.map((card, index) => (
          <GameCard key={`${card.uuid}-${index}`} card={card} index={index} />
        ))}
      </Row>
    </>
  );
}

export default Game;
