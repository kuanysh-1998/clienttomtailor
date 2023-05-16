import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetFavourites: (state) => {
      state.products = [];
    },
  },
});

export const { addToFavourites, removeItem, resetFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
