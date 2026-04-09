import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  darkMode: false,
  build: {},
  selectedCategory: "all",
  
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
setCategory:(state, action) => {
      state.selectedCategory = action.payload;
    },

    addToBuild: (state, action) => {
      const product = action.payload;
   
      state.build[product.category] = product;
    },
   
  },
});


export const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
 setCategory,
 addToBuild
} = cartSlice.actions;

export default cartSlice.reducer;




export const selectTotalItem = (state) => 
  state.cart.items.reduce((sum, product) => sum + product.quantity, 0);


export const selectTotalPrice = (state) => 
  state.cart.items.reduce((total, product) => total + product.quantity * product.price, 0);

export const selectFilteredProducts = (state, allProducts) => {
  const category = state.cart.selectedCategory;
  if (category === "all") return allProducts;
  return allProducts.filter(p => p.category === category);
};
export const selectCategory = (state) => state.cart.selectedCategory;
export const selectBuild = (state) => state.cart.build;
export const selectBuildTotalPrice = (state) => {
  const build = state.cart.build || {};
  return Object.values(build).reduce((total, item) => total + (item.price || 0), 0);
};