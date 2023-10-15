import { useContext, useEffect, useMemo, useState } from "react";
import GameContext from "../hooks/GameContext";
import { getImages } from "../services/images";
import { initializeCards } from "../utils/helpers";
import GameOver from "./GameOver";
import GameBoard from "./GameBoard";
import { Container, Spinner } from "react-bootstrap";
import UserContext from "../hooks/UserContext";
import { initialAttemps } from "../utils/constants";

function Game() {
  const { difficulty } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [allCards, setAllCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [peersCount, setPeersCount] = useState(0);
  const [firstCard, setFirstCard] = useState(null); 
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false);
  const [finished, setFinished] = useState(false);
  const [attempts, setAttempts] = useState(initialAttemps);

  useMemo(() => {
    setLoading(true);
    getImages()
    .then((response) => {
      const images = response.data.entries;
      setAllCards(images);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const peers = difficulty || allCards.length;
    const initializatedCards = initializeCards(allCards, peers);
    setCards(initializatedCards);
    setPeersCount(peers);
  }, [allCards, difficulty]);

  useEffect(() => {
    const handleResetSelection = (isCorrect) => {
      setFirstCard(null);
      setSecondCard(null);
      setStopFlip(false);
      const option = isCorrect ? 'correct' : 'incorrect';
      setAttempts((prev) => {
        const newAttempts = { ...prev };
        newAttempts[option] += 1;
        if (newAttempts.correct === peersCount) {
          setFinished(true);
        }
        return newAttempts;
      });
    };
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.uuid === secondCard.uuid) {
        setCards((prev) => prev.map((card) => {
          if (card.uuid === firstCard.uuid) {
            return {
              ...card,
              matched: true,
            };
          }
          return card;
        }));
        handleResetSelection(true);
      } else {
        setTimeout(() => {
          handleResetSelection(false);
        }, 1000);
      }
    }
  }, [firstCard, secondCard, peersCount]);

  const handleResetGame = () => {
    setFinished(false);
    setAttempts(initialAttemps);
    const peers = difficulty || allCards.length;
    const initializatedCards = initializeCards(allCards, peers);
    setCards(initializatedCards);
    setPeersCount(peers);
  };

  const value = useMemo(() => ({
    cards,
    firstCard,
    setFirstCard,
    secondCard,
    setSecondCard,
    stopFlip,
    attempts,
  }), [
    cards,
    firstCard,
    secondCard,
    stopFlip,
    attempts,
  ]);

  return !loading ? (
    <GameContext.Provider value={value}>
      {!finished ? (
        <GameBoard />
        ) : (
        <GameOver handleResetGame={handleResetGame} />
      )}
    </GameContext.Provider>
  ) : (
    <Container className="spinner-container">
      <Spinner animation="grow" />
    </Container>
  );
}

export default Game;
