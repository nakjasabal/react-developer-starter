import {Routes, Route} from 'react-router-dom';
import TopNavi from './components/TopNavi';
import ZustandBasicApp from './exam1/ZustandBasicApp';
import AttendanceApp from './exam2/AttendanceApp';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<ZustandBasicApp />} />
      <Route path="/ZustandBasicApp" element={<ZustandBasicApp />} />
      <Route path="/AttendanceApp" element={<AttendanceApp />} />
    </Routes>
  </>)
}

export default App; 