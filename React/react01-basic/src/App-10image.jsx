import jqueryLogo from './assets/jquery.png'

function App() {
  const iWidth = {maxWidth:'300px'};
  return (<>
    <h2>React-Image</h2>    
    <ol>
      <li>프런트앤드</li>
      <ul>
        {/* public 폴더 하위의 이미지 */}
        <li><img src="/img/html_css_js.png" style={iWidth} /></li>
        {/* src/assets 폴더 하위의 이미지 */}
        <li><img src={jqueryLogo} style={iWidth} />   </li>
        {/* 웹 이미지 */}
        <li><img src="http://nakja.co.kr/images/reactjs.png" style={iWidth} /></li>
      </ul>
    </ol>
  </>)
}

export default App