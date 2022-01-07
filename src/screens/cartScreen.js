import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import "../UI/products.css";
import Navbar from "../components/Navbar";
import { cartActions } from "../store/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));

  const cartData = useSelector((state) => state.cart);
  const { items } = cartData;

  useEffect(() => {
    dispatch(cartActions.getTotoalAmount());
  }, [cartData, dispatch]);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const message = useSelector((state) => state.cart.message);

  const incerementHandler = (item) => {
    dispatch(cartActions.increment(item));
  };

  const decerementHandler = (item) => {
    dispatch(cartActions.decrement(item));
  };

  const removeItemHandler = (item) => {
    dispatch(cartActions.removeFromcart(item));
  };

  const placeOrderHandler = () => {
    history.push("/placeorder");
    dispatch(cartActions.placeroder());
  };

  return (
    <>
      <Navbar />

      {!isAuthenticated && <Redirect to='/' />}

      {items.length === 0 ? (
        <>
          <h3 className="centered  cartempty">
            Your Cart is Empty{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-emoji-frown"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </h3>
        </>
      ) : (

        <div className="cartScreenData">
          <div className="cartItems">
            {items.map((item) => (
              <div key={item.productId}>
                <div className="items">
                  <div>
                    <img src={item.productImage} alt="productImage" />
                    <p className="quantityInceaseData">
                      <button
                        className="btn"
                        onClick={() => incerementHandler(item)}
                      >
                        +
                      </button>

                      {item.quantity}
                      <button
                        className="btn"
                        onClick={() => decerementHandler(item)}
                      >
                        -
                      </button>
                    </p>
                  </div>

                  <div>
                    <p><strong>{item.productName}</strong></p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      {item.productPrice}
                    </p>
                    <p>
                      Total Amount :
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      {Number(item.totalPrice).toFixed(2)}
                    </p>

                    {item.rating === null ? (
                      " "
                    ) : (
                      <button type="button" className="btn btn-success btn-sm">
                        {item.rating}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star product-rating-star"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </button>
                    )}

                    <h6
                      onClick={() => removeItemHandler(item)}
                      className="text-dark removebtn"
                    >
                      REMOVE
                    </h6>
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
          </div>

          <div className="subtotalDiv">
            <h5 className="subtotal">
              <strong> Sub Total </strong>:{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-currency-dollar"
                viewBox="0 0 16 16"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
              </svg>
              {Number(totalAmount).toFixed(2)}
            </h5>

            <button
              onClick={placeOrderHandler}
              className="btn btn-primary button"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </>

  );
};
export default Cart;
