import {Routes, Route} from "react-router-dom";

import RealtimeCRUD from './realtimes/RealtimeCRUD';
import Listener from './realtimes/Listener';
import ChatStart from './realtimes/ChatStart';
import ChatMessage from './realtimes/ChatMessage';

function App() {
  return (<>    
    <Routes>
      <Route path='/' element={<RealtimeCRUD />} />
      <Route path='/crud' element={<RealtimeCRUD />} />
      <Route path='/listener' element={<Listener />} />
      <Route path='/chat'>
        <Route index element={<ChatStart />} />
        <Route path="talk" element={<ChatMessage />} />
      </Route>
    </Routes>
  </>)
}

export default App;