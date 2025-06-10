import { useOptimistic, useState, useRef } from "react";

// 💡 메시지를 서버로 보내는 비동기 함수 (실제 요청을 시뮬레이션)
async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  //1초후 📩 메시지 반환
  return message;
}

// 🏗️ 메시지 목록과 입력 폼을 포함한 컴포넌트
function Thread({ messages, sendMessage }) {
  // 🔄 입력 폼을 조작하기 위한 ref 생성
  const formRef = useRef();

  // 💡 폼 제출 함수 (비동기 처리)
  async function formAction(formData) {
    // 🛠️ 낙관적 업데이트: 메시지를 즉시 UI에 추가 (서버 응답 전)
    addOptimisticMessage(formData.get("message"));
    // 🔄 폼 입력 필드 초기화
    formRef.current.reset();
     // 📡 실제 서버 요청
    await sendMessage(formData);
  }

   // 💡 useOptimistic 훅 사용: 기존 메시지 목록을 기반으로 낙관적 업데이트 적용
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,// 기존 메시지 목록
    (state, newMessage) => [
      ...state,
      {
        text: newMessage, // 사용자가 입력한 메시지
        sending: true  // 🛑 전송 중 상태 (UI에서 표시)
      }
    ]
  );

  return (
    <>
      {/* 💬 메시지 목록 렌더링 */}
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}

      {/* 📝 메시지 입력 폼 */}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

// 🏗️ 전체 앱을 구성하는 UseOptimisticExam 컴포넌트
const UseOptimisticExam = () => {
  // 📌 실제 메시지 상태 관리
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 }  
  ]);

  // 💡 메시지를 전송하는 함수 (서버 요청 처리)
  async function sendMessage(formData) {
     // 📡 서버로 메시지 전송 (비동기 처리)
    const sentMessage = await deliverMessage(formData.get("message"));
      // ✅ 서버 응답 후 상태 업데이트
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  return (
    <div>
      <h2>useOptimistic 사용하기</h2>
       {/* 💬 메시지 목록과 입력 폼을 포함한 Thread 컴포넌트 */}
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
};

export default UseOptimisticExam;
