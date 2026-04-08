import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  darkMode: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingProduct = state.items.find((p) => p.id === itemToAdd.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },

  
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});


export const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart, 
  toggleDarkMode 
} = cartSlice.actions;

export default cartSlice.reducer;




export const selectTotalItem = (state) => 
  state.cart.items.reduce((sum, product) => sum + product.quantity, 0);


export const selectTotalPrice = (state) => 
  state.cart.items.reduce((total, product) => total + product.quantity * product.price, 0);


export const selectIsDarkMode = (state) => state.cart.darkMode;