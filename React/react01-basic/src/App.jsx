function FrontComp(props) {
  // props.frTitle = "프롭스 변경하기 Error";
  const liRows = [];
  for(let i=0 ; i<props.propData1.length ; i++){    
    liRows.push(
      <li key={i}>{props.propData1[i]}</li>
    );
  }
  return (<>
    <li>{props.frTitle}</li>
    <ul>
      {liRows}
    </ul>
  </>)
}

const BackComp = ({propData2, baTitle}) => {
  const liRows = [];
  let keyCnt=0;
  for(let row of propData2){
    liRows.push(
      <li key={keyCnt++}>{row}</li>
    );
  }
  return (<>
    <li>{baTitle}</li>
    <ul>
      {liRows}       
    </ul>
  </>)
}

function App() {
  const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'React추가'];
  const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot', 'Nextjs추가'];
  return (<>
    <div>
      <h2>React-Props</h2>
      <ol>
        <FrontComp propData1={frontData} frTitle="프론트앤드"></FrontComp>
        <BackComp propData2={backData} baTitle="백앤드"/>
      </ol>
    </div>
  </>)
}

export default App
