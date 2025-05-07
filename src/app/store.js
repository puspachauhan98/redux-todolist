import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer, // 🔑 'todo' becomes the key in your Redux state
  },
});
