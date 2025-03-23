import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({

  name: "track",
  initialState: {
  },
  reducers: {
    addTrack: (state, action) => {
      return action.payload;
    }
  }

})

export const { addTrack } = trackSlice.actions

export default trackSlice.reducer