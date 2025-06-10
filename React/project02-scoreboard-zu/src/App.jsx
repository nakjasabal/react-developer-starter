import { useState } from 'react';
import usePlayerStore from './zustand/usePlayerStore';
import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import Player from './components/Player';

function App() {
  const {playerData} = usePlayerStore();

  return (
    <div className="scoreboard">
      <Header />
      {
        playerData.map((playerRow) => (
          <Player playerRow={playerRow} key={playerRow.idx} />
        ))  
      }
      <AddPlayerForm />
    </div>
  );
}

export default App;