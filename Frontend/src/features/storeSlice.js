import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api";

const initialState = {
    status: "idle",
    authMessage: "",
    username: "",
    storeName: "",
    numberOfTable: 0,
    open: false,
    income: 0,
    selectedDrink: {},
};

export const login = createAsyncThunk("/store/login", async (input) => {
    const res = await api.post("/store/login", input, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return res.data;
});

export const getStoreInfor = createAsyncThunk(
    "/store/getInfo",
    async (input) => {
        const res = await api.post(`/store/${input}`);
        return res.data;
    }
);

export const getDrinkDetail = createAsyncThunk(
    "store/getDrinkDetail",
    async (input) => {
        const res = await api.get(`/drink/${input}`);
        return res.data;
    }
);

export const storeSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetAuth: (state, _) => {
            state.status = "idle";
            state.authMessage = "";
        },
        logout: (state, _) => {
            state.status = "finish";
            state.username = "";
            localStorage.clear();
        },
        clearDrink: (state,_) => {
            state.selectedDrink = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.status === "failed") {
                state.status = "failed";
                state.authMessage = action.payload.message;
            } else {
                state.status = "finish";
                state.authMessage = "login successed!";
                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("store", action.payload.storeid);
            }
        });
        builder.addCase(getStoreInfor.fulfilled, (state, action) => {
            state.username = action.payload.username;
            state.storeName = action.payload.storeName;
            state.income = action.payload.income;
            state.open = action.payload.open;
            state.numberOfTable = action.payload.numberOfTable;
        });
        builder.addCase(getDrinkDetail.fulfilled, (state, action) => {
            state.selectedDrink = action.payload;
        });
    },
});

export const { resetAuth, logout, clearDrink } = storeSlice.actions;
export default storeSlice.reducer;
