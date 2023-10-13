import { Button, Card, Col } from "react-bootstrap";

function GameCard({ card, handleSelectCard, flipped, stopFlip }) {
  return (
    <Col xs={12} sm={5} md={4} lg={3} xl={3} xxl={2} className="game-card-container mb-4" data-testid="game-card">
      <div
        className={`game-card-inner${flipped ? ' game-card-inner--flipped': ''}`}
        data-testid="game-card-inner"
      >
        <div className="game-card-front">
          <Card>
            <Card.Body>
              <Button
                data-testid="game-card-button"
                className="game-card-front__button"
                disabled={stopFlip}
                onClick={() => handleSelectCard(card)}
              >
                Flip
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="game-card-back">
          <Card>
            <Card.Img
              alt="Card Image"
              variant="top"
              src={card.url}
              className="game-card__img"
            />
          </Card>
        </div>
      </div>
    </Col>
  );
}

export default GameCard;
