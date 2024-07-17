import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../features/modals/ModalSlice'
import buildReducer from '../features/builds/BuildSlice'
import authReducer from '../features/auth/AuthSlice'
import userReducer from '../features/user/UserSlice'

export const store = configureStore({
  reducer: {
    modal:modalReducer,
    build:buildReducer,
    auth:authReducer,
    user:userReducer

  },
})