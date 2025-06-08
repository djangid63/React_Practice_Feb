import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'data',
  initialState: {
    userData: [],
    darkMode: {
      isDark: false
    }
  },

  reducers: {
    storeUser: (state, action) => {
      state.userData.push({
        storedName: action.payload.name,
        storedEmail: action.payload.email,
        storedPassword: action.payload.password
      })
    },
    toggleMode: (state, action) => {
      state.darkMode.isDark = !state.darkMode.isDark
    }
  }
})

export const { storeUser, toggleMode } = userSlice.actions
export default userSlice.reducer

