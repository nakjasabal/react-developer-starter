import { firestore } from '../firestoreConfig';
import { doc, setDoc, getDoc } from "firebase/firestore"; 

const FireConnect = () => {
  console.log("firestore", firestore);
 
  const addMessage = async () => {    
    await setDoc(doc(firestore, "React", "Firebase"), {      
      category : "파이어스토어",      
      book : "React로 개발자되기",
      Publisher : '골든래빗',
    });
    console.log("입력성공");
  }

  const getMessage = async () => {
    const docRef = doc(firestore, "React", "Firebase");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("문서:", docSnap.data());
    } 
    else {
      console.log("문서가 없습니다.");
    }
  }

  return (<>
    <h2>Firestore - 연결</h2>
    <input type='button' value='입력Test' onClick={addMessage} />
    <input type='button' value='읽기Test' onClick={getMessage} />
  </>);
}

export default FireConnect;