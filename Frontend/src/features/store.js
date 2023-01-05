import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";
import menuSlice from "./menuSlice";
import tableSlice from "./tableSlice";

export const store = configureStore({
    reducer: {
        common: commonSlice,
        tables: tableSlice,
        menu: menuSlice,
    },
});
