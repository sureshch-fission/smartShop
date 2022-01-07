import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    productQuantity: 1,
    totalQuantity: 0,
    totalAmount: 0,
    message: null,
  },
  reducers: {

    addTocart(state, action) {
      const NewProduct = action.payload;

      const existingProduct = state.items.find(
        (item) => item.productId === NewProduct.id
      );


      state.productQuantity = 1

      if (!existingProduct) {
        state.items.push({
          productId: NewProduct.id,
          productName: NewProduct.name,
          productImage: NewProduct.image_link,
          productPrice: NewProduct.price,
          rating: NewProduct.rating,
          totalPrice: NewProduct.price * NewProduct.productQuantity,
          quantity: NewProduct.productQuantity
        });
        state.message = "product Added to cart";

        state.totalQuantity++;
        localStorage.setItem("CartItems", JSON.stringify(state.items));
        localStorage.setItem(
          "totalQuantity",
          JSON.stringify(state.totalQuantity)
        );
        localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          Number(existingProduct.totalPrice) + Number(NewProduct.price);
      }
    },
    productData(state, action) {
      const data = action.payload
      state.productQuantity = data

    },
    Productincrement(state, data) {
      
      if (state.productQuantity >= 1) {
        state.productQuantity++
      }


    },
    Productdecrement(state) {
      if (state.productQuantity > 1) {
        state.productQuantity--
      }
    },
    addToState(state, action) {
      const cartData = action.payload;
      state.items.push(cartData);
    },
    removeFromcart(state, action) {
      const data = action.payload;

      const stateItems = state.items.filter(
        (item) => item.productId !== data.productId
      );
      state.items = stateItems;
      state.totalQuantity--;
      localStorage.setItem("CartItems", JSON.stringify(state.items));
    },

    increment(state, action) {
      const data = action.payload;

      const IdIndex = state.items.findIndex(
        (product) => product.productId === data.productId
      );

      if (state.items[IdIndex].quantity >= 1) {
        state.items[IdIndex].quantity++;
        state.items[IdIndex].totalPrice =
          state.items[IdIndex].quantity * state.items[IdIndex].productPrice;
      }
    },
    decrement(state, action) {
      const data = action.payload;
      const ProductId = state.items.findIndex(
        (product) => product.productId === data.productId
      );

      if (state.items[ProductId].quantity > 1) {
        state.items[ProductId].quantity -= 1;
        state.items[ProductId].totalPrice =
          state.items[ProductId].totalPrice -
          state.items[ProductId].productPrice;
      } else if (state.items[ProductId].quantity === 1) {
        const stateItems = state.items.filter(
          (item) => item.productId !== data.productId
        );
        state.items = stateItems;
        localStorage.setItem("CartItems", JSON.stringify(state.items));
      }
    },
    getTotoalAmount(state, action) {
      let { total } = state.items.reduce(
        (carttotal, cartitem) => {
          const { productPrice, quantity } = cartitem;

          const totalItem = productPrice * quantity;

          carttotal.total += totalItem;
          //carttotal.Totalquantity += quantity;

          return carttotal;
        },
        { total: 0 }
      );
      state.totalAmount = total;

    },
    placeroder(state, action) {
      state.totalQuantity = 0;
      state.items = [];
      state.totalAmount = 0;
      state.message = null;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
