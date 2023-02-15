import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderMenuVisible: false,
    currentSelectTable: "none",
    editMenuVisible: false,
};

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        triggerOrderMenu: (state, action) => {
            state.orderMenuVisible = !state.orderMenuVisible;
            state.currentSelectTable = action.payload;
        },
        triggerEditMenu: (state, action) => {
            state.editMenuVisible = !state.editMenuVisible;
        },
    },
});

export const { triggerOrderMenu, triggerEditMenu } = commonSlice.actions;
export default commonSlice.reducer;
