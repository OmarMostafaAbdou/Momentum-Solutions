import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import FilterSlice from "./slices/FilterSlice";
import SingleProductSlice from "./slices/productDetailsSlice";

export const store = configureStore({
  reducer: {
    CartReducer: cartSlice,
    FilterReducer: FilterSlice,
    SingleProductReducer: SingleProductSlice,
  },
});
