import { useRef, useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const ChatStart = () => {
  const refRoomName = useRef();
  const refUserName = useRef();
  const refUserPic = useRef();
  const [roomName, setRoomName] = useState('우리집');
  const windowOpen = (paramUrl='') => {
    let qString = `roomName=${refRoomName.current.value}&userName=${refUserName.current.value}`;
    if(paramUrl.trim()) qString += `&imgUrl=${encodeURIComponent(paramUrl)}`;
    window.open(`#/talk?${qString}`, '', 'width=500,height=650');
    refUserName.current.value = '';
    refUserPic.current.value = '';
  }
  const openChatWin = () => {
    if(refUserPic.current.value.trim()) {
      const saveLocation = storageRef(storage, '/profile/'+refUserPic.current.files[0].name);
      uploadBytes(saveLocation, refUserPic.current.files[0]).then((snapshot) => {
        getDownloadURL(saveLocation)
        .then((uploadImgUrl)=>{        
          windowOpen(uploadImgUrl);
        });          
      });
    }
    else{
      windowOpen();
    }
  }
  
  return (<>
    <div style={{margin:'20px'}}>
      <h2>카카오톡 제작하기</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
        openChatWin();
      }}>
        방명 : <input type="text" name="roomName" ref={refRoomName} required
                value={roomName} onChange={(e)=>setRoomName(e.target.value)} /> <br />
        대화명 : <input type="text" name="userName" ref={refUserName} required /> <br />
        프로필사진 : <input type="file" name="userPic" ref={refUserPic} /> <br />
        <button type="submit">채팅시작</button>
      </form>
    </div>
  </>);
};

export default ChatStart;