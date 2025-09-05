import Counter from './Counter';
import EditPlayerForm from './EditPlayerForm';

export default function Player(props) {
  let row = props.playerRow;
  return (<>
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => { alert('선수삭제'); }}> x </button>
        {row.name}
      </span>
      <Counter idx={row.idx} score={row.score} />
    </div>
    {/* <EditPlayerForm /> */}
  </>);
}