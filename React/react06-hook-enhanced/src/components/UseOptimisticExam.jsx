import { useOptimistic, useState, useRef } from "react";

// 메시지를 서버로 전송하는 것을 표현한 비동기 함수
async function deliverMessage(message) {
  // 실제 네트워크 요청처럼 보이도록 1초후 전달받은 메세지 반환 
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

// 메시지 목록과 입력 폼을 렌더링하는 컴포넌트
function Thread({ messages, sendMessage }) {
  // 폼 초기화 용 변수
  const formRef = useRef();

  // 폼 제출 시 실행되는 비동기 함수
  async function formAction(formData) {
    // 메세지를 UI에 즉시 추가 (낙관적 업데이트)
    addOptimisticMessage(formData.get("message"));
    // 폼 리셋
    formRef.current.reset();
    // 메세지를 서버로 전송
    await sendMessage(formData);
  }

  // useOptimistic 훅을 사용하여 낙관적 메시지 상태 정의
  /*
  optimisticMessages : 낙관적 업데이트가 반영된 상태로 UI에 즉시 보여줄 값을 지정 
  addOptimisticMessage : 낙관적 항목을 UI에 추가하는 함수
  messages : useState로 선언한 최초 메세지의 상태
  (state, newMessage) => []
    : addOptimisticMessage("안녕")과 같이 호출하면 이 함수가 실행되어 다음과 같이 항목 추가됨 
    [
      ...기존 메시지,
      { text: "안녕", sending: true }
    ]
  */
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,  
        sending: true 
      }
    ]
  );

  // 메시지 목록을 렌더링
  return (<>
    {optimisticMessages.map((message, index) => (
      <div key={index}>
        {message.text}
        {/* 메시지를 입력하면 낙관적 업데이트로 인해 즉시 화면에 표시됨 */}
        {/* !!은 Boolean 값으로 강제 변환하기 위한 코드 */}
        {!!message.sending && <small>(Sending...)</small>}
      </div>
    ))}
    {/* 폼 제출시 formAction 함수 호출 */}
    <form action={formAction} ref={formRef}>
      <input type="text" name="message" placeholder="메세지를 입력해주세요" />
      <button type="submit">Send</button>
    </form>
  </>);
}

const UseOptimisticExam = () => {
  // 메세지 관리를 위한 State. 객체형 배열로 생성. 
  const [messages, setMessages] = useState([
    { text: "기본 메시지 입니다", sending: false, key: 1 }  
  ]);

  // 메세지 전송을 위한 함수 정의. 
  async function sendMessage(formData) {
    // 메세지 전송 시 1초간 대기 후 반환해주는 함수 호출 
    const sentMessage = await deliverMessage(formData.get("message"));
    // 1초후 반환된 메세지로 state 업데이트 
    setMessages((messages) => [...messages, { text: sentMessage, sending: false }]);
  }

  return (
    <div>
      <h2>useOptimistic 사용하기</h2>
      {/* 전체 화면 구성. state와 함수를 props로 전달. */}
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
};

export default UseOptimisticExam;
