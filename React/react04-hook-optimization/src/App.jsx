import { Routes, Route } from 'react-router-dom';

import TopNavi from './components/TopNavi';
import UseRefExam1 from './components/UseRefExam1';
import UseRefExam2 from './components/UseRefExam2';
import UseMemoExam from './components/UseMemoExam';
import UseCallbackExam from './components/UseCallbackExam';
import UseIdExam from './components/UseIdExam';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<UseRefExam1 />} />
      <Route path='/use-ref1' element={<UseRefExam1 />} />
      <Route path='/use-ref2' element={<UseRefExam2 />} />
      <Route path='/use-memo' element={<UseMemoExam />} />
      <Route path='/use-callback' element={<UseCallbackExam />} />
      <Route path='/use-id' element={<UseIdExam />} />
    </Routes>
  </>)
}

export default App
