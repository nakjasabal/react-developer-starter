import usePlayerStore from '../zustand/usePlayerStore';

export default function Counter(props) {
  const {scoreChangeProcess} = usePlayerStore();
  return (<>
    <div className="counter">
      <button className="counter-action decrement"
        onClick={() => scoreChangeProcess('-', props.idx)}> -</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"
        onClick={() => scoreChangeProcess('+', props.idx)}> +</button>
    </div>
  </>);
}