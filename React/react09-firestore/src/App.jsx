import {Routes, Route} from "react-router-dom";

import TopNavi from './components/TopNavi';
import FireConnect from "./firestores/FireConnect";
import FireCreate from "./firestores/FireCreate";
import FireRead from "./firestores/FireRead";
import FireUpdate from "./firestores/FireUpdate";

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<FireConnect/>} />
      <Route path='/connect' element={<FireConnect />} />
      <Route path='/create' element={<FireCreate />} />
      <Route path='/read' element={<FireRead />} />      
      <Route path='/update/:userid' element={<FireUpdate />} />
    </Routes>
  </>)
}

export default App
