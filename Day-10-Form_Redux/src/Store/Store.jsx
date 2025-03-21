import { configureStore } from '@reduxjs/toolkit'
import SignUpDataReducer from '../Slice/SignUpDataSlice'

export const store = configureStore({
  reducer: {
    data: SignUpDataReducer
  },
})