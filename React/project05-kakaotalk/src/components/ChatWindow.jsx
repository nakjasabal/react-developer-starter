import { realtime } from '../firebaseConfig';
import { ref as realtimeRef, child, set, onValue, push } from "firebase/database";
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import SendMessage from './SendMessage';
import ReceiveMessage from './ReceiveMessage';

const scrollTop = (chatWindow) => {
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${date} ${hours}:${minutes}`;
}

const displayDateTime = (writeDate) => {
  const [msgDate, msgTime] = writeDate.split(' ');
  const today = getCurrentDateTime().slice(0, 10);
  return (msgDate === today) ? msgTime : writeDate;
}

function ChatWindow() {
  const [searchParams] = useSearchParams();
  const roomName = searchParams.get('roomName');
  const userName = searchParams.get('userName');
  const imgUrl = searchParams.get('imgUrl');
  const chatWindow = useRef();
  const timerRef = useRef(0);  
  const [chatData, setChatData] = useState('');

  function messageWrite(chatRoom, chatId, chatMessage) {
    const newPostKey = push(child(realtimeRef(realtime), 'tempValue')).key;
    set(realtimeRef(realtime, chatRoom + '/' + newPostKey), {
      id: chatId,
      message: chatMessage,
      date: getCurrentDateTime(),
      imgUrl: imgUrl,
    });
    console.log('입력성공');
  }

  const dbRef = realtimeRef(realtime, roomName);
  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      timerRef.current = setTimeout(()=>{
        scrollTop(chatWindow.current);
      }, 200);    
      let showDiv = [];      
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if(childData.id===userName){
          showDiv.push(<SendMessage chatData={childData} displayDateTime={displayDateTime} key={childKey} />);
        }
        else{
          showDiv.push(<ReceiveMessage chatData={childData} displayDateTime={displayDateTime} key={childKey} />);
        }
      });
      setChatData(showDiv);      
    });
  }, []);

  return (<>
  <section style={{"backgroundColor":"#eee"}}>
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center p-3"
              style={{'borderTop':'4px solid #ffa900'}}>
              <h5 className="mb-0">Realtime 채팅</h5>
              <div className="d-flex flex-row align-items-center">
                대화명 : {userName}
                <span className="badge bg-warning me-3"></span>
                <i className="fas fa-minus me-3 text-muted fa-xs"></i>
                <i className="fas fa-comments me-3 text-muted fa-xs"></i>
                <i className="fas fa-times text-muted fa-xs"></i>
              </div>
            </div>
            <div className="card-body" ref={chatWindow} data-mdb-perfect-scrollbar="true" style={{'position':'relative','height':'400px','overflowY':'scroll'}}>
              {chatData}
            </div>
            <form onSubmit={(e)=>{
              e.preventDefault();
              let chatRoom = e.target.chatRoom.value;
              let chatId = e.target.chatId.value;
              let message = e.target.message.value;
              if(message===''){
                alert('메세지를 입력하세요'); return;
              }
              messageWrite(chatRoom, chatId, message);
              e.target.message.value = '';
            }}>
              <input type="hidden" name="chatRoom" value={roomName} />
              <input type="hidden" name="chatId" value={userName} />
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                <div className="input-group mb-0">
                  <input type="text" className="form-control" placeholder="메시지를 입력하세요" name="message" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-warning" type="submit" id="button-addon2" style={{'paddingTop':'.55rem'}}>
                    전송
                  </button>
                </div>
            </div>
            </form>
          </div>  
        </div>
      </div>  
    </div>
  </section>
  </>);
}

export default ChatWindow;