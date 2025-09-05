import {Routes, Route} from "react-router-dom";
import TopNavi from './components/TopNavi';
import RefUpload from './storages/FileUpload';
import FileLists from './storages/FileLists';
 
function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<RefUpload/>} />
      <Route path='/upload' element={<RefUpload />} />      
      <Route path='/filelists'>
        <Route index element={<FileLists />} />          
        <Route path=":path" element={<FileLists />} />
      </Route>
    </Routes>
  </>)
}

export default App