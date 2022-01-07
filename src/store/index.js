import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { cartActions } from "./cartSlice";
import loginSlice from "./loginSlice";

import productSlice from "./productSlice";
const store = configureStore({
  reducer: { Products: productSlice.reducer, cart: cartSlice.reducer, userDetails:loginSlice.reducer },
});
store.dispatch(cartActions.getTotoalAmount());

export default store;
