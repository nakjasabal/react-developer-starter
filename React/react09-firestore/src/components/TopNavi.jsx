import {NavLink} from 'react-router-dom';

const TopNavi = () => {
  return (
    <nav>
      <NavLink to="/connect">연결확인</NavLink>&nbsp;
      <NavLink to="/create">입력</NavLink>&nbsp;
      <NavLink to="/read">목록</NavLink>&nbsp;
    </nav>
  );
}
export default TopNavi;