import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        increaseByValue: (state, action) => {
            state.count += action.payload.value
        }
    }
});

export const {increment, decrement, increaseByValue} = counterSlice.actions;
export default counterSlice.reducer