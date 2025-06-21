function FrontComp() {
  return (<>
    <li>프론트엔드</li>
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
    <li>백엔드</li>
    <ul>
      <li>Java</li>
      <li>Oracle</li>
      <li>JSP</li>
      <li>Spring Boot</li>
    </ul>
  </>)
}
let FormComp = function() {
  return (<>
    <form>
      <select name="gubun">
        <option value="front">프론트엔드</option>
        <option value="back">백엔드</option>
      </select>
      <input type="text" name="title" />
      <input type="submit" value="추가" />
    </form>  
  </>);
}
function App() {
  return (<>    
    <h2>React-Component</h2>
    <ol>
      <FrontComp></FrontComp>
      <BackComp />
    </ol>
    <FormComp />
  </>)
}

export default App