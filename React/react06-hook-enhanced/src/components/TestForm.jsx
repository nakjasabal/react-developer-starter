import { useRef } from "react";

const TestForm = () => {
  const formRef = useRef();

  async function sendTest(formData) {
    console.log('폼값', formData.get("message")); 
    formRef.current.reset();
  }

  return (<>
    <h2>formData.get() 테스트 하기</h2>
    <form action={sendTest} ref={formRef}>
      <input type="text" name="message" />
      <input type="submit" value="전송" />
    </form>
  </>); 
}
export default TestForm;