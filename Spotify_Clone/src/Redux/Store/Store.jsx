import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/Auth'
import favoriteReducer from '../Slice/Favourite'
import trackReducer from '../Slice/CurrentTrack'
import appearanceSlice from '../Slice/toggleAppearance'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer,
    track: trackReducer,
    Mode: appearanceSlice

  },
})

export default store