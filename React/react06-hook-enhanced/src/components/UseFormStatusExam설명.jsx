/**
🔍 useFormStatus란?
useFormStatus는 React 19에서 추가된 훅으로,
폼 제출 상태(예: 로딩 중인지, 제출되었는지)를 확인할 때 사용됩니다.

💡 주요 특징
<form> 내부에서만 사용할 수 있음
폼이 **제출 중인지 여부(pending)**를 감지하여 버튼 비활성화 가능


🏗 예제: useFormStatus를 활용한 제출 버튼 비활성화

 */ 
import { useState } from "react";
import { useFormStatus } from "react-dom";

// 💡 더미 서버 요청 함수 (폼 제출을 시뮬레이션)
async function submitForm(formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`"${formData.get("name")}" 님의 요청이 완료되었습니다.`);
    }, 2000); // 2초 후 응답
  });
}

// 🏗️ SubmitButton 컴포넌트 - useFormStatus 사용
const SubmitButton = () => {
  const { pending } = useFormStatus(); // 폼 제출 상태 감지
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? "제출중..." : "제출"}
    </button>
  );
};

const UseFormStatusExam = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData) => {
    const result = await submitForm(formData);
    setMessage(result);
  };

  return (<>
    <h2>useFormStatus 사용하기</h2>
    <form action={handleSubmit}>
      <label>
        이름: <input type="text" name="name" required />
      </label>
      <SubmitButton /> {/* 🛠️ useFormStatus를 사용하는 버튼 */}
    </form>
    {message && <p>{message}</p>}
  </>);
}

export default UseFormStatusExam;

/**
pending: 폼이 제출 중이면 true가 됩니다.
data: 현재 제출 중인 폼의 데이터를 담은 FormData 객체입니다.
method: 폼 제출 방식('get' 또는 'post')을 나타냅니다.
action: 폼의 action prop에 전달된 함수(또는 URI)입니다.

이와 같은 반환값이 있다는데 테스트 해봐야 할듯..

function UsernameForm() {
  const { pending, data } = useFormStatus();
  return (
    <div>
      <input type="text" name="username" disabled={pending} />
      <button type="submit" disabled={pending}>Submit</button>
      <p>{data ? `Requesting ${data.get("username")}...` : ""}</p>
    </div>
  );
}


 */