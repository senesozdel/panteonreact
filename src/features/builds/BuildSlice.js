import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    buildItem: null,
    buildDataList: [],
    buildTypeList:[],
    buildTypeItem:null
}

export const buildSlice = createSlice({
  name: 'build',
  initialState,
  reducers: {
    setBuildItem: (state, action) => {
        state.buildItem = action.payload;
      },
      setBuildDataList: (state, action) => {
        state.buildDataList = action.payload;
      },
      setBuildTypeList: (state, action) => {
        state.buildTypeList = action.payload;
      },
      setBuildTypeItem: (state, action) => {
        state.buildTypeItem = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setBuildItem,setBuildDataList,setBuildTypeList,setBuildTypeItem } = buildSlice.actions

export default buildSlice.reducer