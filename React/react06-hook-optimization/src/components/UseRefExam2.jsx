import { useEffect, useRef } from 'react';

const UseRefExam2 = () => {  
  const passRef1 = useRef();
  const passRef2 = useRef();

  useEffect(() => {    
    console.log('passRef', passRef1, passRef2);
    passRef1.current.focus();
  }, []);

  const checkPassword = () => {
    if(!passRef1.current.value || passRef2.current.value==''){
      alert('비밀번호를 입력해주세요');
      passRef1.current.focus();
      return;
    }
    if(passRef1.current.value===passRef2.current.value){
      alert('비밀번호 확인이 완료되었습니다');
    }
    else{
      alert('비밀번호가 일치하지 않습니다.');
      passRef1.current.value = '';
      passRef2.current.value = '';
      passRef1.current.focus();
    }
  }

  return (<>
    <h2>useRef 사용하기2</h2>
    <form>
      패스워드1 : <input type='text' ref={passRef1} name='pass1' /> <br />
      패스워드2 : <input type='text' ref={passRef2} name='pass2' /> <br />
      <button type='button' onClick={checkPassword}>패스워드확인</button>  
    </form> 
  </>);
}

export default UseRefExam2;