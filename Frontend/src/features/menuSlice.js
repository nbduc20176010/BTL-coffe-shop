import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api";

const initialState = {
    drinks: [],
};

export const getMenu = createAsyncThunk("/menu/getDrinks", async () => {
    const res = await api.get("/drink");
    return res.data;
});

export const editDrink = createAsyncThunk(
    "/menu/editDrink",
    async ({ _id, drink }) => {
        const res = await api.put(`/drink/${_id}`, drink);
        return res.data;
    }
);

export const addDrink = createAsyncThunk("/menu/addDrink", async (drink) => {
    const res = await api.post("/drink", drink);
    return res.data;
});

export const deleteDrink = createAsyncThunk("/menu/deleteDrink", async (id) => {
    const res = await api.delete(`/drink/${id}`);
    return res.data;
});

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.drinks = action.payload;
        });
        builder.addCase(editDrink.fulfilled, (state, action) => {
            const newList = state.drinks.map((item) =>
                item._id === action.payload._id ? action.payload : item
            );
            state.drinks = newList;
        });
        builder.addCase(addDrink.fulfilled, (state, action) => {
            const newList = [...state.drinks, action.payload];
            state.drinks = newList;
        });
        builder.addCase(deleteDrink.fulfilled, (state, action) => {
            const newList = state.drinks.filter(
                (item) => item._id !== action.payload._id
            );
            state.drinks = newList;
        });
    },
});

export default menuSlice.reducer;
