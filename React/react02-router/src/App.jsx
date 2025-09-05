import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import TopNavi from './components/TopNavi';
import NotFound from './components/NotFound';
import CommonLayout from './components/CommonLayout';
import LayoutIndex from './components/LayoutIndex';
import RouterHooks from './components/RouterHooks';

function App() {  
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/intro' element={<CommonLayout />}>
        <Route index element={<LayoutIndex />} />        
        <Route path="router" element={<RouterHooks />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>    
  </>);
}

export default App;