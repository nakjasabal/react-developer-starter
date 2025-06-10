import { useState } from 'react'

function App() {
  const [myCount, setMyCount] = useState({cnt : 0});
  const plusMyCount1 = () => {
    myCount.cnt += 1;
    setMyCount(myCount);
    console.log("변경후1", myCount);
  }
  const plusMyCount2 = () => {
    let newMyCount = {...myCount};
    newMyCount.cnt += 1;
    setMyCount(newMyCount);
    console.log("변경후2", myCount);
  }
  return (<>
    <div>
      <h2>React-얕은비교</h2>
      <p>Count : { myCount.cnt }</p>
      <button type='button' onClick={plusMyCount1}>원본증가</button>
      <button type='button' onClick={plusMyCount2}>복사본증가</button>
    </div>
  </>)
}

export default App
