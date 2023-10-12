import { Card, Col } from "react-bootstrap";

function GameCard({ card, index }) {
  return (
    <Col xs={12} sm={5} md={4} lg={3} xl={3} xxl={2} className="mb-4">
      <Card>
        <Card.Img variant="top" src={card.url} className="game-card__img"/>
      </Card>
    </Col>
  );
}

export default GameCard;
