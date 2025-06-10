import { useState, useMemo } from 'react';

const isPrime = (num) => {
  console.log('소수판단중..');
  for(let exCost=1 ; exCost<1234567890 ; exCost++){ 
    /* 실행 비용이 높은 연산으로 가정 */
  }
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const UseMemoExam = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  // step1
  const checkPrime = isPrime(number);  

  // step2
  // const checkPrime = useMemo(() => isPrime(number), [number]);

  return (<>
    <h2>useMemo 사용하기</h2>
    <input type="number" value={number} placeholder="숫자 입력"
      onChange={(e) => setNumber(parseInt(e.target.value))}
    />
    <p>정수 {number} 는 {checkPrime ? '소수 O' : '소수 X'}</p>

    <input type="text" value={text} placeholder="이름 입력(소수 판단과 무관)"
      onChange={(e) => setText(e.target.value)}
    />
    <p>입력한 이름: {text}</p>
  </>);
};

export default UseMemoExam;
