import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({

  name: "track",
  initialState: {
    song: []
  },
  reducers: {
    addTrack: (state, action) => {

      state.song = action.payload
      // return action.payload;
    }
  }

})

export const { addTrack } = trackSlice.actions

export default trackSlice.reducer