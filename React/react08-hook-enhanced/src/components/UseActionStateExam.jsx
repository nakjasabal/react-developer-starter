import { useActionState } from "react";

async function authLogin(prevState, formData) {
  console.log('prevState', prevState);
  const userid = formData.get('userid');
  const userpw = formData.get('userpw');

  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  
  if (userid === "nakja" && userpw === "1234") {
    return "로그인 성공";
  } 
  else {    
    return "로그인 실패";
  }
}

const UseActionStateExam = () => {
  const [message, formAction, isPending] = useActionState(authLogin, null);
  return (<>
    <h2>useActionStatus 사용하기</h2>
    <form action={formAction}>
      아이디 : <input type="text" name="userid" /> <br />
      비번 : <input type="text" name="userpw" /> <br />
      <button type="submit">로그인</button>
      {isPending ? "Loading..." : message}
    </form>
  </>);
}

export default UseActionStateExam;