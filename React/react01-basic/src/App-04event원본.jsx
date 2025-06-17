function FrontComp(props) {
  const liRows = [];
  for(let i=0 ; i<props.propData1.length ; i++){    
    liRows.push(
      <li key={i}>{props.propData1[i]}</li>
    );
  }
  return (<>
    <li><a href='/' onClick={()=>{
      props.onMyEvent1();
    }}>{props.frTitle}</a></li>
    <ul>
      {liRows}
    </ul>
  </>)
}

const BackComp = ({propData2, baTitle, onMyEvent2}) => {
  const liRows = [];
  let keyCnt=0;
  for(let row of propData2){
    liRows.push(
      <li key={keyCnt++}>{row}</li>
    );
  }
  return (<>
    <li><a href="/" onClick={(event)=>{
      event.preventDefault();
      onMyEvent2('백앤드 클릭됨(자식전달)');
    }}>{baTitle}</a></li>
    <ul>
      {liRows}       
    </ul>
  </>)
}

function App() {
  const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery'];
  const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot'];
  return (<>
    <div>
      <h2>React-Event</h2>
      <ol>
        <FrontComp propData1={frontData} frTitle="프론트앤드"
          onMyEvent1={()=>{
            alert('프론트앤드 클릭됨(부모전달)');
          }}
        ></FrontComp>
        <BackComp propData2={backData} baTitle="백앤드"
          onMyEvent2={(msg)=>{
            alert(msg);
          }}
        />
      </ol>
    </div>
  </>)
}

export default App
