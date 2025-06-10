import {NavLink} from 'react-router-dom';

const TopNavi = () => {
  return (
    <nav>
      <NavLink to="/crud">CRUD</NavLink>&nbsp;
      <NavLink to="/listener">Listener</NavLink>&nbsp;
      <NavLink to="/chat">Chating</NavLink>
    </nav>
  );
}

export default TopNavi;