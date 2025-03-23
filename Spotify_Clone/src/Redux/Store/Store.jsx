import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/Auth'
import favoriteReducer from '../Slice/Favourite'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer
  },
})

export default store