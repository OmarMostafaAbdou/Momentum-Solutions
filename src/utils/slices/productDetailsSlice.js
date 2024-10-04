import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: "",
};

const productDetailsSlice = createSlice({
  name: "single-product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
