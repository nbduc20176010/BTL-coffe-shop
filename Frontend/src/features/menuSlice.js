import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drinks: [
        {
            key: "drink 1",
            name: "drink 1",
            price: 10000,
            img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-12-Mudslide%2FIMG_5520",
        },
        {
            key: "drink 2",
            name: "drink 2",
            price: 10000,
            img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-12-Mudslide%2FIMG_5520",
        },
        {
            key: "drink 3",
            name: "drink 3",
            price: 10000,
            img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-12-Mudslide%2FIMG_5520",
        },
        {
            key: "drink 4",
            name: "drink 4",
            price: 10000,
            img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-12-Mudslide%2FIMG_5520",
        },
        {
            key: "drink 5",
            name: "drink 5",
            price: 10000,
            img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-12-Mudslide%2FIMG_5520",
        },
        {
            key: "drink 6",
            name: "drink 6",
            price: 10000,
            img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-12-Mudslide%2FIMG_5520",
        },
        {
            key: "drink 7",
            name: "drink 7",
            price: 10000,
            img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-12-Mudslide%2FIMG_5520",
        },
        {
            key: "drink 8",
            name: "drink 8",
            price: 10000,
            img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-12-Mudslide%2FIMG_5520",
        },
    ],
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
    },
});

export default menuSlice.reducer;
