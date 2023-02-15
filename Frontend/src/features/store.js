import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";
import menuSlice from "./menuSlice";
import tableSlice from "./tableSlice";
import storeSlice from "./storeSlice";

export const store = configureStore({
    reducer: {
        common: commonSlice,
        tables: tableSlice,
        menu: menuSlice,
        store: storeSlice
    },
});
