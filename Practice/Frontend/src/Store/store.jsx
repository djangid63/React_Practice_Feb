import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../Redux/slice'

const store = configureStore({
  reducer: {
    'data': loginReducer
  }
})

export default store