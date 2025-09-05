import usePlayerStore from '../zustand/usePlayerStore';

export default function Stats() {
  const {playerData} = usePlayerStore(); 
  return (<>
    <table className="stats">
      <tbody>
      <tr>
        <td>총인원수 :</td>
        <td>{playerData.length}</td>
      </tr>
      <tr>
        <td>점수합계 :</td>
        <td>{playerData.reduce((prev, curr) => prev+curr.score, 0)}</td>
      </tr>
      </tbody>
    </table>    
  </>);
}