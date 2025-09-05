import { createSlice } from '@reduxjs/toolkit';

let nextIdx = 2;

const todoSlice = createSlice({
  name: 'myTodos',
  initialState: [
    {idx: 1, contents: '리덕스툴킷공부', done: false }
  ], 
  reducers: {
    addTodo: (prevState, action) => {
      prevState.push({ idx: nextIdx++, contents: action.payload, done: false });
    },
    toggleTodo: (prevState, action) => {
      const todoRow = prevState.find(t => t.idx === action.payload);
      if (todoRow) todoRow.done = !todoRow.done;
    },
    deleteTodo: (prevState, action) => {
      return prevState.filter(t => t.idx !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;