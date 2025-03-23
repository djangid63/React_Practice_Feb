import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({

  name: "track",
  initialState: {
    songs: []
  },
  reducers: {
    addTrack: (state, action) => {

      state.songs = action.payload
      // return action.payload;
    }
  }

})

export const { addTrack } = trackSlice.actions

export default trackSlice.reducer