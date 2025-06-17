import { useState } from 'react';

const FrontComp = (props) => {
  return (<>
    <li><a href="/" onClick={(event)=>{      
      event.preventDefault();
      props.onSetMode('front');
    }}>프론트앤드</a></li>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Javascript</li>
      <li>jQuery</li>
    </ul>
  </>)
}
const BackComp = ({setMode}) => {
  return (<>
    <li><a href="/" onClick={(event)=>{      
      event.preventDefault();
      setMode('back');
    }}>백앤드</a></li>
    <ul>
      <li>Java</li>
      <li>Oracle</li>
      <li>JSP</li>
      <li>Spring Boot</li>
    </ul>
  </>)
}
function App() {
  const [mode, setMode] = useState('both');
  const handleSetMode = (mode) => {
    setMode(mode);
  };
  let contents = '';
  if(mode==='front'){
    contents = <>
      <FrontComp onSetMode={(mode)=>{
        setMode(mode);
      }}></FrontComp>
    </>
  }
  else if(mode==='back'){
    contents = <>
      <BackComp setMode={setMode} />
    </>
  }
  else{
    contents = <>
      <FrontComp onSetMode={(mode)=>{
        handleSetMode(mode);
      }}></FrontComp>
      <BackComp setMode={handleSetMode} />
    </>
  }
 
  return (<>
    <h2><a href="/" onClick={(event)=>{
      event.preventDefault();
      setMode('both');
    }}>React-State</a></h2>
    <ol>
      {contents}
    </ol>
  </>)
}

export default App
