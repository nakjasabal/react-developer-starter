import {useState, useEffect} from 'react';

function MoveBox(props){
  console.log('LifeCycle==>1.컴포넌트 실행(함수 호출)');
 
  const [position, setPosition] = useState(props.initPosition);
  const [leftCount, setLeftCount] = useState(1);
  const boxStyle = {
    backgroundColor: 'red', position: 'relative', textAlign: 'center',
    width: '100px', height: '100px', margin: '10px', lineHeight: '100px', 
    left: `${position}px`
  };

  const moveLeft = () => {
    setPosition(() => position - 20);
    setLeftCount(() => leftCount + 1);
  };

  const moveRight = () => {
    setPosition(() => position + 20);
  };
   
  useEffect(function(){    
    console.log('useEffect실행==>3.컴포넌트 마운트');
    return ()=>{
      console.log('useEffect실행==>4.컴포넌트 언마운트');
    }
  // }); //1.의존성 배열 생략
  // }, []); //2.의존성 배열에 빈 배열 지정
  }, [leftCount]); //3.의존성 배열에 State변수 할당

  
  console.log('return실행==>2.렌더링(return문))');
  return (
    <div>
      <h4>함수형 컴포넌트의 수명주기</h4>      
      <div style={boxStyle}>{leftCount}</div>    
      <input type='button' value="좌측이동" onClick={moveLeft} />
      <input type='button' value="우측이동" onClick={moveRight} />
    </div>
  );
}

function LifeCycle() {
  return (<>
    <h2>React Hook - useEffect</h2>
    <MoveBox initPosition={50} />
  </>);
}

export default LifeCycle;