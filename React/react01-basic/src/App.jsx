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
      <li style={{color : "red"}}>프론트앤드</li>
      <ul style={myStyle}>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
      </ul>
      <li className='backEnd'>백앤드</li>
      <ul>
        <li id='backEndSub'>Java</li>
        <li class='warnings'>Oracle</li>
        <li>JSP</li>
        <li>Spring Boot</li>
      </ul>
    </ol>
    <form>
      <select name="gubun">
        <option value="front">프런트앤드</option>
        <option value="back">백앤드</option>
      </select>
      <input type="text" name="title" />
      <input type="submit" value="추가" />
    </form>
  </>)
}

export default App
