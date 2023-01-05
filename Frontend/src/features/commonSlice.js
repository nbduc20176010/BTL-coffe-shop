import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderMenuVisible: false,
};

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        triggerOrderMenu: (state) => {
            state.orderMenuVisible = !state.orderMenuVisible;
        },
    },
});

export const { triggerOrderMenu } = commonSlice.actions;
export default commonSlice.reducer;
