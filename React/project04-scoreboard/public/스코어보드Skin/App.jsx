import { useState } from 'react';
import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import Player from './components/Player';

function App() {
  const [playerData, setPlayerData] = useState([
    {idx: 1, name: '홍길동', score: 10},
    {idx: 2, name: '손오공', score: 20},
    {idx: 3, name: '유비', score: 30},
    {idx: 4, name: '달타냥', score: 40},
  ]);

  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" playerData={playerData}/>
      {
        playerData.map((playerRow) => (
          <Player playerRow={playerRow} />
        ))  
      }
      <AddPlayerForm></AddPlayerForm>      
    </div>
  );
}

export default App;
