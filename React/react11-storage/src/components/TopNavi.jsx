import {NavLink} from 'react-router-dom';

const TopNavi = ()=>{
  return (
    <nav>
      <NavLink to="/upload">업로드</NavLink>&nbsp;
      <NavLink to="/filelists">목록보기</NavLink>&nbsp;
    </nav>
  );
}

export default TopNavi;