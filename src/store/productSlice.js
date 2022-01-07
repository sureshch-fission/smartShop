import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
    filtered: null,
    message: [],
    data: [],
    quantity: 0,
    keyword:''
  },
  reducers: {
    fetchData(state, action) {
      const productdata = action.payload;

      state.products.push(productdata);
      state.quantity = 1
    },
    filterProducts(state, action) {
      const data = action.payload;
      const data1 = data.toLowerCase();
      state.keyword = data1
    }
  },
});

export const productActions = ProductSlice.actions;
export default ProductSlice;
