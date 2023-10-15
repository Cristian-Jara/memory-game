import { useMemo, useState } from 'react';
import './App.css';
import { getStoredUserName } from './utils/helpers';
import Home from './views/Home';
import Layout from './components/Layout/Layout';
import UserContext from './hooks/UserContext';

function App() {
  const [userName, setUserName] = useState(getStoredUserName() || '');
  const [started, setStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

  const value = useMemo(
    () => ({
      userName,
      setUserName,
      started,
      setStarted,
      difficulty,
      setDifficulty,
    }),
    [userName, started, difficulty]
  );

  return (
    <UserContext.Provider value={value}>
      <Layout>
        <Home />
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
