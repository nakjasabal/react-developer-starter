import { Link } from 'react-router-dom';

function NotFound() {
  return (<>
    <h2>Not Found</h2>
    <p>
      페이지를 찾을 수 없습니다. ㅜㅜ <br/>
      <Link to="/list">목록바로가기</Link>
    </p>
  </>);
}

export default NotFound;