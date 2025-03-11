import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { blogReducer } from "./blog/slice";
export const Store = configureStore({
  reducer: {
    todo: todoReducer,
    blog:blogReducer
  },
});
