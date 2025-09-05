export default function Stopwatch(props) {
  return (<>
    <div className="stopwatch">
      <h1 className="h1">StopWatch</h1>
      <span className="stopwatch-time">{0}</span>
      <button onClick={()=>{ alert('시작/정지'); }}>{(true) ? 'Stop' : 'Start'}</button>
      <button onClick={()=>{ alert('리셋'); }}>Reset</button>
    </div>
  </>);
}