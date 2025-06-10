import { firestore } from '../firestoreConfig';
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FireUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const memberEdit = async (p_collection) => {
    await setDoc(doc(firestore, p_collection, params.userid), {      
      id, 
      pass, 
      name, 
      regdate: new Date().toISOString().slice(0, 10),
    });
    alert("수정 성공");
    navigate('/read');
  }

  const getMember = async (userid) => {       
    const docRef = doc(firestore, "members", userid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("도큐먼트:", docSnap.data());
      let callData = docSnap.data();
      setId(callData.id);
      setPass(callData.pass);
      setName(callData.name);
    } 
    else {
      console.log("도큐먼트가 없습니다");
    }
  }
 
  useEffect(() => {    
    getMember(params.userid);
  }, []); 

  return (<>
    <h2>Firestore - 수정하기</h2>
    <form onSubmit={(event) => {
      event.preventDefault();
      let collection = event.target.collection.value;
      memberEdit(collection);
    }}>
      <table border='1'>
      <tbody>
        <tr>
          <td>컬렉션</td>
          <td><input type="text" name="collection" value="members" readOnly /></td>
        </tr>
        <tr>
          <td>아이디(변경불가)</td>
          <td><input type="text" name="id" value={id} readOnly /></td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td><input type="text" name="pass" value={pass}  
            onChange={(event)=>{setPass(event.target.value)}} /></td>
        </tr>
        <tr>
          <td>이름</td>
          <td><input type="text" name="name" value={name}  
            onChange={(event)=>{setName(event.target.value)}} /></td>
        </tr>
      </tbody>
      </table>
      <button type="submit">수정</button>
    </form>
  </>);
}

export default FireUpdate;