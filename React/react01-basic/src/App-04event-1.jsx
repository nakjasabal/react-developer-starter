function FrontComp(props) {
  return (<>
    <li><a href='/' onClick={()=>{
      props.onMyEvent1();
    }}>프론트엔드</a></li>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Javascript</li>
      <li>jQuery</li>
    </ul>
  </>)
}
function App() {
  return (<>
    <h2>React-Event</h2>
    <ol>
      <FrontComp onMyEvent1={()=>{
        alert('프론트엔드 클릭됨(부모전달)');
      }}></FrontComp>
    </ol>
  </>)
}

export default App