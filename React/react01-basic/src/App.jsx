import jqueryLogo from './assets/jquery.png';

function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Verdana"
  };
  const iWidth = {maxWidth:'300px'};
  return (<>
    <h2>React-Style</h2>    
    <ol>
      <li style={{color : "red"}}>프론트엔드</li>
      <ul>
        <li><img src="/img/html_css_js.png" style={iWidth} /></li>
        <li><img src={jqueryLogo} style={iWidth} /></li>
        <li><img src="http://nakja.co.kr/images/reactjs.png" style={iWidth} /></li>
      </ul>
      <li className='backEnd'>백엔드</li>
      <ul>
        <li id='backEndSub'>Java</li>
        <li class='warnings'>Oracle</li>
        <li style={myStyle}>JSP</li>
        <li>Spring Boot</li>
      </ul>
    </ol>
  </>)
}

export default App