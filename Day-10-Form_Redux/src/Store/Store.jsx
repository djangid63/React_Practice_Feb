import { configureStore } from '@reduxjs/toolkit'
import SignUpDataReducer from '../Slice/SignUpDataSlice'

const store = configureStore({
  reducer: {
    data: SignUpDataReducer
  },
})
export default store
