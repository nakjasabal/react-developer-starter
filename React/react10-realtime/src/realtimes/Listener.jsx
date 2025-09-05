import { useEffect, useState } from 'react';
import { realtime } from '../realtimeConfig';
import { ref, onValue } from "firebase/database";
import TopNavi from '../components/TopNavi';

function Listener() {
  const [fireData, setFireData] = useState([]);  
  const dbRef = ref(realtime, 'users');
  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      let showTr = [];   
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        showTr.push(
          <tr>
            <td>{childKey}</td>
            <td>{childData.name}</td>
            <td>{childData.pass}</td>
            <td>{childData.fireKey}</td>
          </tr>
        );
      });
      setFireData(showTr);
    });
  }, []);
 
  return (<>
    <TopNavi></TopNavi> 
    <h2>Realtime Database - Listener</h2>
    <table border={1}>
      <thead>
      <tr>
        <th>아이디</th><th>이름</th><th>패스워드</th><th>고유키</th>
      </tr>
      </thead>
      <tbody>
        {fireData}
      </tbody>
    </table>
  </>);
}

export default Listener;
