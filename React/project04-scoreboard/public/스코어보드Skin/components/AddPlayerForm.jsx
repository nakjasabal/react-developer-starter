export default function AddPlayerForm(props) {
  return (<>
    <form className="form" noValidate>
      <input type="text" name="player" minLength="10" className="input" 
        placeholder="이름을 추가하세요" required onChange={()=>{}} />
      <input type="submit" className="input" value="Add Player"
        onClick={()=>{ alert('선수추가'); }} />
    </form>
  </>);
}