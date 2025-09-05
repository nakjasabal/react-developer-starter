import { useState } from "react";
import usePlayerStore from '../zustand/usePlayerStore';
import Counter from './Counter';
import EditPlayerForm from './EditPlayerForm';

export default function Player({playerRow}) {
  const {deletePlayerProcess} = usePlayerStore();  
  const [showEdit, setShowEdit] = useState(false);
  return (<>
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={()=>deletePlayerProcess(playerRow.idx)}>x</button>
        <a href="/" onClick={(e)=>{
          e.preventDefault();
          setShowEdit(!showEdit);
        }}>{playerRow.name}</a>
      </span>
      <Counter idx={playerRow.idx} score={playerRow.score} />
    </div>
    {
      (showEdit===false) ? '' : 
        <EditPlayerForm pName={playerRow.name} pIdx={playerRow.idx} setShowEdit={setShowEdit} />
    }
  </>);
}