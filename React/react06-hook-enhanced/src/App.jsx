import {Routes, Route} from "react-router-dom";
import TopNavi from './components/TopNavi';
import TestForm from './components/TestForm';
import UseOptimisticExam from './components/UseOptimisticExam';
import UseActionStateExam from './components/UseActionStateExam';
import UseFormStatusExam from './components/UseFormStatusExam';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<TestForm />} />
      <Route path='/use-optimistic' element={<UseOptimisticExam />} />      
      <Route path='/use-action-state' element={<UseActionStateExam />} />
      <Route path='/use-form-status' element={<UseFormStatusExam />} />
    </Routes>
  </>)
}

export default App
