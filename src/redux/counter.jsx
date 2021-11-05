import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("counter/getData", async (dispatch, getState) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    status: "",
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increaseByValue: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = "fetching in process";
    },
    [getData.fulfilled]: (state, action) => {
      state.status = "maal aa gaya";
    },
    [getData.rejected]: (state, action) => {
      state.status = "error zala re bhau";
    },
  },
});

export const {increment, decrement, increaseByValue} = counterSlice.actions;
export default counterSlice.reducer