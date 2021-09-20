import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const bastketSlice = createSlice({
  name: "bascket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {},
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = bastketSlice.actions;

// Selectors to pull information from the basket slice
export const selecItems = state => state.basket.items;

export default bastketSlice.reducer;
