import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slice/CounterSlice'
import FooterSlice from '../Slice/FooterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    footer: FooterSlice
  },
})