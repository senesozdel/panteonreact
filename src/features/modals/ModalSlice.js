import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showAddModal: false,
    showDeleteModal: false,
    showEditModal: false,
    modalType:null
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowAddModal: (state, action) => {
        state.showAddModal = action.payload;
      },
      setShowDeleteModal: (state, action) => {
        state.showDeleteModal = action.payload;
      },
      setShowEditModal: (state, action) => {
        state.showEditModal = action.payload;
      },
      setModalType: (state, action) => {
        state.modalType = action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { setShowAddModal,setShowDeleteModal,setShowEditModal,setModalType} = modalSlice.actions

export default modalSlice.reducer