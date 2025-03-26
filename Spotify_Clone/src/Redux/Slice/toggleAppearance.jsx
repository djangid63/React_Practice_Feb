import { createSlice } from "@reduxjs/toolkit";

export const appearanceSlice = createSlice({
  name: "Mode",
  initialState: {
    isDark: false
  },
  reducers: {

    toggleMode: ((state, action) => {
      state.isDark = !state.isDark;
    })
  }
})

export const { toggleMode } = appearanceSlice.actions
export default appearanceSlice.reducer