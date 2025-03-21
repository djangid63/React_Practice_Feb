import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  },



  reducers: {
    addData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  }
})

export const { addData } = dataSlice.actions

export default dataSlice.reducer