import {Routes, Route} from "react-router-dom";
import TopNavi from './components/TopNavi';
import ReduxBasicApp from './exam1/ReduxBasicApp';
import TodoApp from './exam2/TodoApp';

import { Provider as BasicProvider } from 'react-redux';
import { store as basicStore } from './exam1/store';

import { Provider as TodoProvider } from 'react-redux';
import { store as todoStore } from './exam2/store';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes> 
      <Route path='/' element={<BasicProvider store={basicStore}>
                        <ReduxBasicApp /></BasicProvider>} />
      <Route path='/ReduxBasicApp' element={<BasicProvider store={basicStore}>
                                      <ReduxBasicApp /></BasicProvider>} />
      <Route path='/TodoApp' element={<TodoProvider store={todoStore}>
                                <TodoApp /></TodoProvider>} />
    </Routes>
  </>)
}

export default App;