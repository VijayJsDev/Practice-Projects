import { createSlice } from "@reduxjs/toolkit";

// adding the new cart items [] = { id: '',title: "", price: "", description: ""}
// bew state after cart values = { id: '',title: "", price: "", description: "", quantity: 1, totalPrice: 0, }
const products = [];

const productSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    addProducts(state, action) {
      let { id, price, totalPrice, quantity } = action.payload;
      const existingProduct = state.find(product => product.id === id);

      if(existingProduct){
        // quantity++ and totalPrice = existingPrice + price
        existingProduct.quantity++;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
        return
      }

      state.push(action.payload);
    },
    //decrement(state, action){  }
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
