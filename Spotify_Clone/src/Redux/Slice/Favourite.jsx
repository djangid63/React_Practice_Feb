import { createSlice } from "@reduxjs/toolkit";

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
        const songData = {
          id: action.payload.id,
          name: action.payload.name,
          year: action.payload.year,
          duration: action.payload.duration,
          image: action.payload.image,
          downloadUrl: action.payload.downloadUrl,
          primaryArtists: action.payload.primaryArtists,
        };

        state.songs.push(songData);
      }
    }
  }
})

export const { addToFav } = favSlice.actions;

export default favSlice.reducer