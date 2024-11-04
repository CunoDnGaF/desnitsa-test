import { createSlice } from "@reduxjs/toolkit";

const initialState : Array<object> = [];

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
        if(state.length === 0) {
            state.push(...action.payload);
        }
    },
  }
})

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;