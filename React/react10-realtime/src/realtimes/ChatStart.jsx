import { useRef } from 'react';
import TopNavi from '../components/TopNavi';

const ChatStart = () => {
  const refRoom = useRef();  
  const refId = useRef();  
  const openChatWin = () => {
    window.open(`/chat/talk?roomId=${refRoom.current.value}&userId=${refId.current.value}`, '', 'width=400,height=500');
    refId.current.value = '';
  }
  
  return (<>
    <TopNavi></TopNavi> 
    <h2>Realtime Database - Chatting</h2>
    대화방명 : <input type="text" name="roomId" value="myChating1" ref={refRoom} readOnly /> <br />
    대화명 : <input type="text" name="userId" ref={refId} /> <br />
    <button type="button" onClick={openChatWin}>채팅시작</button>
  </>);
};

export default ChatStart;