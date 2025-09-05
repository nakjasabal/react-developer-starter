import { useRef, useState } from "react";

export default function Stopwatch() {
  const [timerFlag, setTimerFlag] = useState(false);
  let [ticker, setTicker] = useState(0);
  let timerRef = useRef();
  const startTimer = () => {
    ticker++;
    timerRef.current = setInterval(()=>{
      setTicker(ticker++);
    }, 1000);    
  }
  const stopTimer = () => {    
    clearInterval(timerRef.current);
  }
  return (<>
    <div className="stopwatch">
      <h1 className="h1">스탑워치</h1>
      <span className="stopwatch-time">{ticker}</span>
      <button onClick={()=>{ 
        setTimerFlag(!timerFlag);
        (timerFlag===true) ? stopTimer() : startTimer() ;
      }}>{(timerFlag===false) ? 'Start' : 'Stop'}</button>
      <button onClick={()=>{ 
        if(timerFlag===true){          
          alert('StopWatch가 동작중입니다.');
        }
        else{
          setTicker(0);
        }
      }}>Reset</button>
    </div>
  </>);
}