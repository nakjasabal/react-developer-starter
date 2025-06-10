/**
폼 작업의 결과에 따라 상태를 업데이트할 수 있는 Hook입니다.
const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);

-fn : 폼이 제출되거나 버튼이 눌렸을 때 호출되는 함수.
-initialState : 처음에 상태를 원하는 값. 이 인수는 작업이 처음 호출된 후에는 무시됩니다.
-permalink? : 이 양식이 수정하는 고유한 페이지 URL을 포함하는 문자열
 */
import { useActionState } from "react";

// async function increment(previousState, formData) {
//   console.log('formData', formData.get('userID'));
//   return previousState + 1;
// }

async function addToCart(prevState, queryData) {
  console.log('prevState', prevState);
  const userid = queryData.get('userid');
  const userpw = queryData.get('userpw');

  if (userid === "nakja" && userpw === "1234") {
    return "로그인 성공";
  } 
  else {
    // Add a fake delay to make waiting noticeable.
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    return "로그인 실패";
  }
}

const UseActionStateExam = () => {
  /**
  최초 시도할때는 null이 addToCart()의 prevState로 전달됨. 
  두번째부터는 이전 시도에서 return된 값이 출력됨. 즉 addToCart()에서 반환한 값이
  message에 입력되는 형식임. 
   */
  const [message, formAction, isPending] = useActionState(addToCart, null, '../');
  return (<>
    <h2>useActionStatus 사용하기(O)</h2>
    <form action={formAction}>
      아이디 : <input type="text" name="userid" /> <br />
      비번 : <input type="text" name="userpw" /> <br />
      <button type="submit">로그인</button>
      {isPending ? "Loading..." : message}
    </form>
  </>);
}

export default UseActionStateExam;