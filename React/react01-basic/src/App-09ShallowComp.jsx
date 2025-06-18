import { useState } from 'react';

const TopComp = ({MyData}) => {
  return (<>
    <ol>
      <li>프런트앤드</li>
      <ul>
        {MyData.front.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <li>백앤드</li>
      <ul>
        {MyData.back.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </ol>
  </>)
}
function App() {
  const [MyData, setMyData] = useState({
    front: ['HTML5', 'CSS3', 'Javascript', 'jQuery'],
    back: ['Java', 'Oracle', 'JSP', 'Spring Boot'],
  });
  const addFront = () => {
    MyData.front.push('React');
    setMyData(MyData); 
  }
  const addBack = () => {
    const newBack = [...MyData.back, 'Node.js'];
    const newMyData = { ...MyData, back: newBack }; 
    setMyData(newMyData);
  }
  return (<>
    <h2>React-Shallow Comparison</h2>
    <TopComp MyData={MyData} />
    <button type='button' onClick={addFront}>프런트추가</button>
    <button type='button' onClick={addBack}>백앤드추가</button>
  </>)
}

export default App