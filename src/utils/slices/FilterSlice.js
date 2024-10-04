import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: undefined,
  sort: undefined,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.category = action.payload;
    },
    sortBy: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { filterByCategory, sortBy } = filterSlice.actions;

export default filterSlice.reducer;
