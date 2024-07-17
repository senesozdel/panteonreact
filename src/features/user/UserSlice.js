import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userList: [],
    userItem :null
    
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserList: (state, action) => {
        state.userList = action.payload;
      },
      setUserItem: (state, action) => {
        state.userItem = action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { setUserList,setUserItem} = userSlice.actions

export default userSlice.reducer