import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storedfullName: '',
  storedEmail: '',
  storedPassword: '',

}

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    userCredentials: (state, action) => {
      state.storedfullName = action.payload.fullName;
      state.storedEmail = action.payload.email;
      state.storedPassword = action.payload.password
    }
  }
})

export const { userCredentials } = authSlice.actions

export default authSlice.reducer