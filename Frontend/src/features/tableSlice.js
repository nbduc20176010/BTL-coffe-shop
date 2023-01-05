import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        number: 1,
        numOfSits: 4,
        status: "empty",
        order: [],
    },
    {
        number: 2,
        numOfSits: 4,
        status: "empty",
        order: [],
    },
    {
        number: 3,
        numOfSits: 4,
        status: "empty",
        order: [],
    },
    {
        number: 4,
        numOfSits: 4,
        status: "empty",
        order: [],
    },
    {
        number: 5,
        numOfSits: 4,
        status: "empty",
        order: [],
    },
    {
        number: 6,
        numOfSits: 4,
        status: "empty",
        order: [],
    },
    {
        number: 7,
        numOfSits: 4,
        status: "empty",
        order: [],
    },
    {
        number: 8,
        numOfSits: 4,
        status: "empty",
        order: [],
    },
];

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        submitOrder: (state, action) => {
            state.order = action.payload;
        },
    },
});

export const { submitOrder } = tableSlice.actions;
export default tableSlice.reducer;
