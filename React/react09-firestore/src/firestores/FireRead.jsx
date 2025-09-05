import { firestore } from '../firestoreConfig';
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const FireRead = () => {
  const [showData, setShowData] = useState([]);
  const [isRender, setIsRender] = useState(true);

  const getCollection = async () => {
    let trArray = [];
    const querySnapshot = await getDocs(collection(firestore, "members"));
    querySnapshot.forEach((row) => {
      let memberInfo = row.data();
      trArray.push (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{memberInfo.pass}</td>
          <td>{memberInfo.name}</td>
          <td>{memberInfo.regdate}</td>
          <td>
            <NavLink to={"/update/"+row.id}>[수정]</NavLink>
            &nbsp;
            <NavLink onClick={async ()=>{
              if(confirm('삭제할까요?')){
                await deleteDoc(doc(firestore, "members", row.id));
                alert('삭제 성공');
                setIsRender(!isRender);
              }
            }}>[삭제]</NavLink>
          </td>
        </tr>  
      );
    });
    setShowData(trArray);
  }

  useEffect(() => {
    getCollection();
  }, [isRender]);

  return (<>
    <h2>Firestore - 목록</h2>
    <table border='1'>
      <thead>
        <tr className='text-center'>
          <th>아이디</th><th>비밀번호</th><th>이름</th>
          <th>가입일</th><th></th>
        </tr>
      </thead>
      <tbody>
        {showData}
      </tbody>
    </table>
  </>);
}

export default FireRead;