import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slice/userSlice'

const store = configureStore({
  reducer: {
    'data': userReducer
  }
})

export default store