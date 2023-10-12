import { useMemo, useState } from 'react';
import './App.css';
import GameContext from './hooks/GameContext';
import { getImages } from './services/images';
import { getStoredUserName, initializeCards } from './utils/helpers';
import Home from './views/Home';
import Layout from './components/Layout/Layout';
import { initialGameState } from './utils/constants';

function App() {
  const [game, setGame] = useState({
    userName: getStoredUserName() || '',
    ...initialGameState,
  });
  const [cards, setCards] = useState([]);

  console.log('game', game);

  useMemo(() => {
    getImages()
    .then((response) => {
      const images = response.data.entries;
      setCards(initializeCards(images));
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const contextData = useMemo(() => ({
    game,
    setGame,
    cards,
    setCards,
  }), [game, cards])

  return (
    <GameContext.Provider value={contextData}>
      <Layout>
        <Home />
      </Layout>
    </GameContext.Provider>
  );
}

export default App;
