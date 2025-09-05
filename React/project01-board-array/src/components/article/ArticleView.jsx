function ArticleView(props){
  return (
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="30%" /><col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <th>작성자</th>
            <td>{props.selectRow.writer}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>{props.selectRow.title}</td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>{props.selectRow.date}</td>
          </tr>
          <tr>
            <th>내용1</th>
            <td>{props.selectRow.contents}</td>
          </tr>
          <tr>
            <th>내용2</th>
            <td>{
              props.selectRow.contents.split('\n').map((currVal)=>{
                return (<>
                  {currVal} <br key={Math.random()} />
                </>);
              })						
            }</td>
          </tr>
          <tr>
            <th>내용3</th>
            <td style={{'whiteSpace':'pre-wrap'}}>
              {props.selectRow.contents}
            </td>
          </tr>
        </tbody>
      </table> 
    </article>
  );
}
export default ArticleView;
