import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Edit() {  
  const navigate = useNavigate();
  const params = useParams();
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "tname=board_apis&idx="+params.idx;
  parameter += "&apikey=42db3e68e07b870208f59f87242a0752";

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  
  useEffect(function(){
    fetch(requestUrl +"?"+ parameter)
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        setWriter(json.name);
        setTitle(json.subject);
        setContents(json.content);
      });
  }, []);

  return (<>
    <header>
      <h2>게시판-수정</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
    <form onSubmit={
      (event)=>{
        event.preventDefault();
        fetch('http://nakja.co.kr/APIs/php7/boardEditJSON.php', {
          method: 'POST',
          headers: {
            'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: new URLSearchParams({
            tname: 'board_apis',
            idx: params.idx,
            name: event.target.writer.value,
            subject: event.target.title.value,
            content: event.target.contents.value,
            apikey: "42db3e68e07b870208f59f87242a0752",
          }),
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        navigate("/view/"+params.idx);
		  }
    }>
      <table id="boardTable">
        <tbody>
          <tr>
            <th>작성자</th>
            <td><input type="text" name="writer" value={writer} 
              onChange={(event)=>{setWriter(event.target.value)}} 
            /></td>
          </tr>
          <tr>
            <th>제목</th>
            <td><input type="text" name="title" value={title} 
              onChange={(event)=>{setTitle(event.target.value)}} 
            /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea name="contents" rows="3" value={contents} 
              onChange={(event)=>{setContents(event.target.value)}}
            ></textarea></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="수정" />
    </form>    
    </article>
  </>);
}

export default Edit;
