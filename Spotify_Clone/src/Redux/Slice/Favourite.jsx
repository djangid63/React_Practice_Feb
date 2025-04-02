import { createSlice } from "@reduxjs/toolkit";
import { SiDazhongdianping } from "react-icons/si";

const initialState = {
  songs: []
}

export const favSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const exists = state.songs.find(song => song.id === action.payload.id);
      if (!exists) {
        state.songs.push(action.payload);
      }
    },
    removeFromFav: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    }
  }
})

export const { addToFav, removeFromFav } = favSlice.actions;

export default favSlice.reducer