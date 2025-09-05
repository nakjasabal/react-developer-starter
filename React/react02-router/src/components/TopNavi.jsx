import {Link, NavLink} from 'react-router-dom';

const TopNavi = ()=>{
  return (
    <nav>
      <a href="/">Home</a>&nbsp;
      <NavLink to="/intro">인트로</NavLink>&nbsp;
      <NavLink to="/intro/router">Router관련Hook</NavLink>&nbsp;
      <Link to="/xyz">잘못된URL</Link>&nbsp;
    </nav>
  );
}

export default TopNavi;