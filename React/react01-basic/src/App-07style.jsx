function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Verdana"
  };
  return (<>
    <h2>React-Style</h2>    
    <ol>
      <li style={{color : "red"}}>프론트엔드</li>
      <ul style={myStyle}>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
      </ul>
      <li className='backEnd'>백엔드</li>
      <ul>
        <li id='backEndSub'>Java</li>
        <li class='warnings'>Oracle</li>
        <li>JSP</li>
        <li>Spring Boot</li>
      </ul>
    </ol>
  </>)
}

export default App