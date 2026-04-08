import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart: (state, action) => {
      const itemToAdd = action.payload; 
      const existingProduct = state.find((p) => p.id === itemToAdd.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
      
        state.push({ ...itemToAdd, quantity: 1 });
      }
    },

    
    removeFromCart: (state, action) => {
   
      return state.filter((p) => p.id !== action.payload);
    },


    increaseQuantity: (state, action) => {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },


    decreaseQuantity: (state, action) => {
      const product = state.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;


export default cartSlice.reducer;


export const selectTotalItem = (state) => 
  state.cart.reduce((sum, product) => sum + product.quantity, 0);

export const selectTotalPrice = (state) => 
  state.cart.reduce((total, product) => total + product.quantity * product.price, 0);