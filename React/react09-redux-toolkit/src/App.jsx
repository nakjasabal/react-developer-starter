import {Routes, Route} from "react-router-dom";
import TopNavi from './components/TopNavi';

import { Provider as BasicProvider } from 'react-redux';
import { store as basicStore } from './exam1/store';
import ReduxBasicApp from './exam1/ReduxBasicApp';

import { Provider as TodoProvider } from 'react-redux';
import { store as todoStore } from './exam2/store';
import TodoApp from './exam2/TodoApp';

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