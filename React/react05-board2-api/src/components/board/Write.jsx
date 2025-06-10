import { Link, useNavigate } from 'react-router-dom';

function Write() {
  //페이지 이동을 위한 Hook 
  const navigate = useNavigate();

  return (<>
    <header>
      <h2>게시판-작성</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
    <form onSubmit={
      (event)=>{
        event.preventDefault();
        fetch('http://nakja.co.kr/APIs/php7/boardWriteJSON.php', {
          method: 'POST',
          headers: {
            'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: new URLSearchParams({
            tname: 'board_apis',           
            name: event.target.writer.value,
            subject: event.target.title.value,
            content: event.target.contents.value,
            apikey: "42db3e68e07b870208f59f87242a0752",
          }),
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        
        navigate("/list");
		  }
    }>
      <table id="boardTable">
        <tbody>
          <tr>
            <th>작성자</th>
            <td><input type="text" name="writer" /></td>
          </tr>
          <tr>
            <th>제목</th>
            <td><input type="text" name="title" /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea name="contents" rows="3"></textarea></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="작성" />
    </form>    
    </article>
  </>);
}

export default Write;
