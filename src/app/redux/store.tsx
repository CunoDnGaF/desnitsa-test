import { apiSlice } from "./slice/apiSlice";
import dataSlice from './slice/dataSlice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    data: dataSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;