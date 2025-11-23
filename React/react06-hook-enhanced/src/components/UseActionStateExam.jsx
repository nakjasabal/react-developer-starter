import { useActionState } from "react";

// 로그인 처리를 위한 비동기 함수 정의
async function authLogin(prevState, formData) {
  console.log('prevState', prevState);
  // 사용자가 입력한 폼값을 읽음 
  const userid = formData.get('userid');
  const userpw = formData.get('userpw');

  // 1초 지연을 위한 코드
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  
  //로그인 여부에 따른 메시지 반환
  if (userid === "nakja" && userpw === "1234") {
    return "로그인 성공";
  } 
  else {    
    return "로그인 실패";
  }
}

const UseActionStateExam = () => {
  /**
  message : authLogin 함수가 반환한 상탯값. "로그인 성공" 또는 "실패"
  formAction : useActionState가 생성한 폼 액션 함수
  isPending : 액션 함수 실행 중 여부로 true 또는 false
  authLogin : 폼이 제출될 때 호출되는 비동기 함수
  null : 상태의 초깃값. message의 초기 상태
  */
  const [message, formAction, isPending] = useActionState(authLogin, null);
  return (<>
    <h2>useActionState 사용하기</h2>
    <form action={formAction}>
      아이디 : <input type="text" name="userid" /> <br />
      비번 : <input type="text" name="userpw" /> <br />
      <button type="submit">로그인</button>
      {/* 로그인 처리 중 로딩 메시지 출력  */}
      {isPending ? "Loading..." : message}
    </form>
  </>);
}

export default UseActionStateExam;