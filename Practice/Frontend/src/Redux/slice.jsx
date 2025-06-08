import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'data',
  initialState: {
    userData: {
      storedName: '',
      storedEmail: '',
      storedPassword: '',
    },
    darkModeVal: {
      isDark: false,
    }
  }, reducers: {
    addUser: (state, action) => {
      state.userData.storedName = action.payload.name;
      state.userData.storedEmail = action.payload.email;
      state.userData.storedPassword = action.payload.password;
    },
    isDarkMode: (state) => {
      state.isDark = !state.isDark
    }
  }
})

export const { addUser, isDarkMode } = loginSlice.actions;
export default loginSlice.reducer