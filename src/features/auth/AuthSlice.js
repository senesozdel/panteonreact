import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    token: [],
    registerError:"",
    loginError:"",
    loggedUser:{
      name:null,
      email:null
    }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload;
      },
      setRegisterError: (state, action) => {
        state.registerError = action.payload;
      },
      setLoginError: (state, action) => {
        state.loginError = action.payload;
      },
      setLoggedUser: (state, action) => {
        state.loggedUser = action.payload;
      }

  },
})

// Action creators are generated for each case reducer function
export const {setToken,setLoginError,setRegisterError,setLoggedUser} = authSlice.actions

export default authSlice.reducer