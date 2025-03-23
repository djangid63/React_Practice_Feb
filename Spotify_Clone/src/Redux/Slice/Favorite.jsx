import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Songs: [""]
}

export const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.Songs = action.payload
    }
  }
})

export const { addToFav } = favSlice.actions;

export default favSlice.reducer