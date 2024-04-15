import { createSlice } from "@reduxjs/toolkit";

const initialState = { isToggle: false };



const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    showToggle(state) {
      state.isToggle = !state.isToggle;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;