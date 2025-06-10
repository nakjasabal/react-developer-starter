const BackComp06 = ({propData2, baTitle, onMyEvent2}) => {
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
      onMyEvent2('back');
    }}>{baTitle}</a></li>
    <ul>
      {liRows}       
    </ul>
  </>)
}

export default BackComp06;