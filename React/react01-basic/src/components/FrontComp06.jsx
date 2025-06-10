export default function FrontComp06(props) {
  const liRows = [];
  for(let i=0 ; i<props.propData1.length ; i++){    
    liRows.push(
      <li key={i}>{props.propData1[i]}</li>
    );
  }
  return (<>
    <li><a href='/' onClick={(event)=>{
      event.preventDefault();
      props.onMyEvent1('front');
    }}>{props.frTitle}</a></li>
    <ul>
      {liRows}
    </ul>
  </>)
}