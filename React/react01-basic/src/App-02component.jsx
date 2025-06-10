function FrontComp() {
  return (<>
    <li>프론트앤드</li>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Javascript</li>
      <li>jQuery</li>
    </ul>
  </>)
}

const BackComp = () => {
  return (<>
    <li>백앤드</li>
    <ul>
      <li>Java</li>
      <li>Oracle</li>
      <li>JSP</li>
      <li>Spring Boot</li>
    </ul>
  </>)
}

function App() {
  return (<>
    <div>
      <h2>React-Component</h2>
      <ol>
        <FrontComp></FrontComp>
        <BackComp />
      </ol>
    </div>
  </>)
}

export default App
