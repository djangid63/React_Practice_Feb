import { configureStore } from "@reduxjs/toolkit";
import todo from "../features/todo/TodoSlice";

export const store = configureStore({
  reducer: todo
})