import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
 
function List() {
  const [boardData, setBoardData] = useState([]);    
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardListJSON.php";
  let parameter = "tname=board_apis";
  parameter += "&apikey=42db3e68e07b870208f59f87242a0752";

  useEffect(function(){
    fetch(requestUrl +"?"+ parameter)
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        setBoardData(json);
      });
  }, []);
  
  let lists = boardData.map((row) => {
    let date = row.regdate.substring(0,10);
    let subject = row.subject.substring(0,20);
    return (
      <tr key={row.idx}>
        <td className="cen">{row.idx}</td>
        <td><Link to={"/view/"+row.idx}>{subject}</Link></td>
        <td className="cen">{row.name}</td>
        <td className="cen">{date}</td>
      </tr>
    );
  });

  return (<>
    <header>
      <h2>게시판-목록</h2>
    </header>
    <nav>
      <Link to="/write">글쓰기</Link>
    </nav>
    <article>
      <table id="boardTable">
        <thead>
          <tr>
            <th>No</th><th>제목</th><th>작성자</th><th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {lists}
        </tbody>
      </table>
    </article>
  </>);
}

export default List;
