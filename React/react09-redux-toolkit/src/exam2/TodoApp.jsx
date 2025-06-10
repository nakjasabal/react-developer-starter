import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(nowState => nowState.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (<>
    <h2>할일관리App</h2>
    <input value={input} onChange={e => setInput(e.target.value)} 
      placeholder="할 일 입력" />
    <button onClick={handleAdd}>추가</button>
    <ul>
      {todos.map(todoRow => (
        <li key={todoRow.id}>
          <span style={{ cursor: 'pointer',
              textDecoration: todoRow.done ? 'line-through' : 'none',
            }}
            onClick={() => dispatch(toggleTodo(todoRow.idx))}>
            {todoRow.contents}
          </span>
          <button onClick={() => dispatch(deleteTodo(todoRow.idx))}>삭제</button>
        </li>
      ))}
    </ul>
  </>);
};

export default TodoApp;

 