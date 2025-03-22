import { createSlice, nanoid } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  value: 5
}

export const counterSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {

    addValue: (state, action) => {
      state.value += action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { addValue } = counterSlice.actions

export default counterSlice.reducer