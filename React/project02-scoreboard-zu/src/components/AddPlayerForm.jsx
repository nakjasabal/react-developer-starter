import { useState } from 'react';
import usePlayerStore from '../zustand/usePlayerStore';

export default function AddPlayerForm() {
  const {addPlayerProcess} = usePlayerStore();
  const [inputName, setInputName] = useState('');
  return (<>
    <form className="form" noValidate onSubmit={(e)=>{
      e.preventDefault();
      addPlayerProcess(inputName);
      setInputName('');
    }}>
      <input type="text" name="player" className="input" placeholder="이름을 추가하세요"
        value={inputName} onChange={(e)=>{setInputName(e.target.value)}} />
      <input type="submit" className="input" value="플레이어추가" />
    </form>
  </>);
}