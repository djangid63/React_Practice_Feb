import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/Auth'
import favoriteReducer from '../Slice/Favorite'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer
  },
})

export default store