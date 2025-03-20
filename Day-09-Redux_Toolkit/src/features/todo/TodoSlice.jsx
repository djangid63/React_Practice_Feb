import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todo.push(todo)
    },

    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload)
    },

    updateTodo: (state, action) => {
      state.todo = state.todo.map((todo) => {
        // todo.id === action.payload.id
        //   ? { text: action.payload.text }
        //   : todo

        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text }
        } else {
          return { todo }
        }
      })
    }
  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer