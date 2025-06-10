import { useState } from "react";
import { useFormStatus } from "react-dom";

async function submitForm(formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`"${formData.get("name")}" 님의 요청이 완료되었습니다.`);
    }, 1000);
  });
}

const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  console.log('data', data);
  console.log('method', method);
  console.log('action', action);
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
      <SubmitButton />
    </form>
    {message && <p>{message}</p>}
  </>);
}

export default UseFormStatusExam;
