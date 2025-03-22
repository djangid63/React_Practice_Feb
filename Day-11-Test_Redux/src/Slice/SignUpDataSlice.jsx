import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    storedEmail: '',
    storedPassword: '',
    firstName: '',
    lastName: '',
  },



  reducers: {
    addData: (state, action) => {
      state.storedEmail = action.payload.email;
      state.storedPassword = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  }
})

export const { addData } = dataSlice.actions

export default dataSlice.reducer