import { createSlice } from "@reduxjs/toolkit";

// adding the new cart items [] = { id: '',title: "", price: "", description: ""}
// bew state after cart values = { id: '',title: "", price: "", description: "", quantity: 1, totalPrice: 0, }
const products = { cartItems: [], totalQuantity: 0 };

const productSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    // addProducts(state, action) {
    //   let { id, price, totalPrice, quantity } = action.payload;
    //   const existingProduct = state.find((product) => product.id === id);

    //   if (existingProduct) {
    //     // quantity++ and totalPrice = existingPrice + price
    //     existingProduct.quantity++;
    //     existingProduct.totalPrice =
    //       existingProduct.price * existingProduct.quantity;
    //     return;
    //   }

    //   state.push(action.payload);
    // },
    //decrement(state, action){  }
    addCartItems(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeCartItems(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
