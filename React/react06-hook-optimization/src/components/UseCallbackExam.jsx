import { useState, useEffect, useCallback } from 'react';

const DivBox = ({ fnBoxStyle, numberVar }) => {
  const [myStyle, setMyStyle] = useState({});
  useEffect(() => {
    console.log('박스 스타일 변경');
    setMyStyle(fnBoxStyle());
  }, 
  [fnBoxStyle]);
  
  return <div style={myStyle}>{numberVar}</div>
}

const UseCallbackExam = () => {
  const [boxSize, setboxSize] = useState(100);
  const [boxColor, setboxColor] = useState(0);
  const [number, setNumber] = useState(0);
  const colorArr = ['red', 'green', 'blue'];
  
  //step1
  const fnBoxStyle = () => {
    return {
      backgroundColor : `${colorArr[boxColor]}`,
      width : `${boxSize}px`, height : `${boxSize}px`,
      textAlign: 'center', lineHeight: `${boxSize}px`
    };
  }

  //step2
  // const fnBoxStyle = useCallback(() => {
  //   return {
  //     backgroundColor : `${colorArr[boxColor]}`,
  //     width : `${boxSize}px`, height : `${boxSize}px`,
  //     textAlign: 'center', lineHeight: `${boxSize}px`
  //   };
  // }, [boxSize, boxColor]);

  return (<>    
    <h2>useCallback 사용하기</h2>
    <button onClick={() => setboxSize(boxSize+10)}>크기증가</button>
    <button onClick={() => setboxColor((boxColor+1)%3)}>컬러변경</button>
    <button onClick={() => setNumber((number+1))}>숫자변경</button>
    <DivBox fnBoxStyle={fnBoxStyle} numberVar={number} />
  </>); 
}

export default UseCallbackExam;