import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  todos: [],
  searched: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((val) => val.id != action.payload.id);
    },
    search: (state, action) => {
      state.searched = state.todos.filter(
        (val) => val.title == action.payload.title
      );
    },
  },
});

export default todoSlice.reducer;
export const { add, deleteTodo } = todoSlice.actions;
