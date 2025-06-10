import FrontComp from './components/FrontComp05'
import BackComp from './components/BackComp05'

function App() {
  const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery'];
  const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot'];
  return (<>
    <div>
      <h2>React-Modules</h2>
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
