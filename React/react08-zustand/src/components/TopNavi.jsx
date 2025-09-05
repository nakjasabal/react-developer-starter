import {NavLink} from 'react-router-dom';

const TopNavi = ()=>{
  return (
    <nav>
      <NavLink to="/ZustandBasicApp">기본사용법</NavLink>&nbsp;
      <NavLink to="/AttendanceApp">출결관리</NavLink>&nbsp;
    </nav>
  );
}

export default TopNavi;