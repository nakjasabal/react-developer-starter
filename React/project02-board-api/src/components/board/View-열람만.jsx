import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';

function View() {
  const navigate = useNavigate();
  const params = useParams();
  const [boardData, setBoardData] = useState({});
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "tname=board_apis&idx="+params.idx;
  parameter += "&apikey=42db3e68e07b870208f59f87242a0752";
  
  useEffect(function(){
    fetch(requestUrl +"?"+ parameter)
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        setBoardData(json);
      });
  }, []);

  return (<>
    <header>
      <h2>게시판-열람</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>&nbsp; 
      <Link to={"/edit/"+params.idx}>수정</Link>&nbsp; 
      <Link onClick={() => {}}>삭제</Link>
    </nav>
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="20%" /><col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <th>작성자</th>
            <td>{boardData.name}</td>
          </tr>
          <tr>
            <th>작성일</th>
            <td>{boardData.regdate}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>{boardData.subject}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td>{boardData.content}</td>
            {/* <td dangerouslySetInnerHTML={
                  {__html: boardData.content}} 
                  style={{'whiteSpace':'pre-wrap'}}></td> */}
          </tr>
        </tbody>
      </table> 
    </article>
  </>);
}

export default View;

