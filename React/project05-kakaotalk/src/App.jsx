import { Routes, Route } from 'react-router-dom';
import ChatStart from './components/ChatStart';
import ChatWindow from './components/ChatWindow';
 
function App() {  
  return (<>
    <Routes>
      <Route path='/' element={<ChatStart />} />          
      <Route path="/talk" element={<ChatWindow />} />      
    </Routes>
  </>);
}

export default App;
