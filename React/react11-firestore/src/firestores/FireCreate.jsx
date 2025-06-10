import { firestore } from '../firestoreConfig';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

const FireCreate = () => {
  const navigate = useNavigate();

  const memberWrite = async (p_collection, p_id, p_pass, p_name) => {
    await setDoc(doc(firestore, p_collection, p_id), {      
      id: p_id,
      pass: p_pass,
      name: p_name,
      regdate: new Date().toISOString().slice(0, 10),
    });    
    alert('입력 성공');
    navigate('/read');
  }

  return (<>
    <h2>Firestore - 입력하기</h2>
    <form onSubmit={(event) => {
      event.preventDefault();
      let collection = event.target.collection.value;
      let id = event.target.id.value;
      let pass = event.target.pass.value;
      let name = event.target.name.value;

      if(id===''){ alert('아이디를 입력하세요'); return;}
      if(pass===''){ alert('비밀번호를 입력하세요'); return;}
      if(name===''){ alert('이름을 입력하세요'); return;}
      
      memberWrite(collection, id, pass, name);
      event.target.id.value = '';
      event.target.pass.value = '';
      event.target.name.value = '';
    }}>
      <table border='1'>
        <tbody>
          <tr>
            <td>컬렉션</td>
            <td><input type="text" name="collection" value="members" readOnly /></td>
          </tr>
          <tr>
            <td>아이디</td>
            <td><input type="text" name="id" /></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type="text" name="pass" /></td>
          </tr>
          <tr>
            <td>이름</td>
            <td><input type="text" name="name" /></td>
          </tr>
        </tbody>
      </table>
      <button type="submit">입력</button>
    </form>
  </>);
}

export default FireCreate;