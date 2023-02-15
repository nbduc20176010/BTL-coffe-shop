import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api";

const initialState = {
    tables: [],
};

export const getStoreTables = createAsyncThunk(
    "/store/getTables",
    async (id) => {
        const res = await api.get(`/table?storeId=${id}`);
        return res.data;
    }
);

export const submitOrder = createAsyncThunk(
    "/table/submitOrder",
    async (input) => {
        const res = await api.put(`/table/${input.id}`, input.order);
        return res.data;
    }
);

export const clearTable = createAsyncThunk("/table/clearTable", async (id) => {
    const res = await api.put(`/table/clear/${id}`);
    return res.data;
});

export const deleteTable = createAsyncThunk(
    "/table/deleteTable",
    async (id) => {
        const res = await api.delete(`/table/${id}`);
        return res.data;
    }
);

export const addTable = createAsyncThunk("/table/addTable", async (input) => {
    const res = await api.post("/table", input);
    return res.data;
});

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        dropTable: (state) => {
            state.tables = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getStoreTables.fulfilled, (state, action) => {
            state.tables = action.payload;
        });
        builder.addCase(submitOrder.fulfilled, (state, action) => {
            let newTables = state.tables.map((item) =>
                item._id === action.payload._id ? action.payload : item
            );
            state.tables = newTables;
        });
        builder.addCase(clearTable.fulfilled, (state, action) => {
            let newTables = state.tables.map((item) =>
                item._id === action.payload._id ? action.payload : item
            );
            state.tables = newTables;
        });
        builder.addCase(deleteTable.fulfilled, (state, action) => {
            let newList = state.tables.filter(
                (item) => item._id !== action.payload._id
            );
            state.tables = newList;
        });
        builder.addCase(addTable.fulfilled, (state, action) => {
            let newList = [...state.tables, action.payload];
            state.tables = newList;
        });
    },
});

export const { dropTable } = tableSlice.actions;
export default tableSlice.reducer;
