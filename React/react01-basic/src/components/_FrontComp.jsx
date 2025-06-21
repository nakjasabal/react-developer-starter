export default function FrontComp(props) {
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