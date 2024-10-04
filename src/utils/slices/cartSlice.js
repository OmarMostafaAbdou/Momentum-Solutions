import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (err) {
    console.error("Error get cart from local storage", err);
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    console.error("Error saving cart to local storage", err);
  }
};

const products = loadCartFromLocalStorage();

const initialState = {
  products,
  counter: products.length,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddProductToCart: (state, action) => {
      const newProduct = action.payload;

      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({
          ...newProduct,
          quantity: newProduct.quantity || 1,
        });
      }

      state.counter = state.products.length;

      saveCartToLocalStorage(state.products);
    },

    RemoveProductFromCart: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );

      state.counter = state.products.length;

      saveCartToLocalStorage(state.products);
    },
  },
});

export const { AddProductToCart, RemoveProductFromCart } = CartSlice.actions;
export default CartSlice.reducer;
