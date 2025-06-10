import {useState} from 'react';

function WriteForm(props){
  return (<>
    <form onSubmit={(e)=>{
      console.log("이벤트객체e", e);
      e.preventDefault();
      let gubun = e.target.gubun.value;
      let title = e.target.title.value;
      props.writeAction(gubun, title);
    }}>
      <select name="gubun">
        <option value="front">프론트앤드</option>
        <option value="back">백앤드</option>
      </select>
      <input type="text" name="title" />
      <input type="submit" value="추가" />
    </form>
  </>)
}

function App() {
  const [message, setMessage] = useState('폼값 검증 진행중');
  return (<>
    <div>
      <h2>React-Form submit</h2>
      <WriteForm writeAction={(gu, ti)=>{
        console.log("Form값", gu, ti);
        if(gu!=='' && ti!==''){
          setMessage('폼값 검증 완료');
        }
        else{
          alert("빈값있음");
        }
      }}/>
      <p>{message}</p>
    </div>
  </>)
}

export default App
