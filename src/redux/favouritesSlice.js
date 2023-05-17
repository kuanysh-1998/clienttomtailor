import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favProducts: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const item = state.favProducts.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.favProducts.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.favProducts= state.favProducts.filter(
        (item) => item.id !== action.payload
      );
    },
    resetFavourites: (state) => {
      state.favProducts = [];
    },
  },
});

export const { addToFavourites, removeItem, resetFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
