import { useContext } from 'react';
import GameContext from '../hooks/GameContext';
import { Container, Row } from 'react-bootstrap';
import GameCounter from '../components/GameCounter/GameCounter';
import GameCard from '../components/GameCard/GameCard';

function GameBoard() {
  const { cards, firstCard, setFirstCard, secondCard, setSecondCard, stopFlip } =
    useContext(GameContext);

  const handleSelectCard = (card) => {
    if (firstCard === null) {
      setFirstCard(card);
    } else if (secondCard === null && firstCard.id !== card.id) {
      setSecondCard(card);
    }
  };

  return (
    <Container fluid data-testid="game-board" className="p-0">
      <GameCounter />
      <Container fluid className="pt-5">
        <Row>
          {cards.map((card) => (
            <GameCard
              key={card.id}
              card={card}
              handleSelectCard={handleSelectCard}
              flipped={firstCard?.id === card.id || secondCard?.id === card.id || card.matched}
              stopFlip={stopFlip}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default GameBoard;
