import {Routes, Route} from "react-router-dom";
import TopNavi from './components/TopNavi';
import UseOptimisticExam from './components/UseOptimisticExam';
import UseFormStatusExam from './components/UseFormStatusExam';
import UseActionStateExam from './components/UseActionStateExam';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<UseOptimisticExam/>} />
      <Route path='/use-optimistic' element={<UseOptimisticExam />} />      
      <Route path='/use-action-state' element={<UseActionStateExam />} />
      <Route path='/use-form-status' element={<UseFormStatusExam />} />
    </Routes>
  </>)
}

export default App
