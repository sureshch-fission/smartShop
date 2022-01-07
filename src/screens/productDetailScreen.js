import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, Link, useRouteMatch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { cartActions } from "../store/cartSlice";
import "../UI/products.css";
import Navbar from "../components/Navbar";


const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();


  const products = useSelector((state) => state.Products.products);
  const productQuantity = useSelector(
    (state) => state.cart.productQuantity
  );

  const LoadedProducts = products.find((item) => item.id == params.productId);
  const cartData = useSelector((state) => state.cart);
  const { items } = cartData;


  const image_link = LoadedProducts.image_link;
  const id = LoadedProducts.id;
  const price = LoadedProducts.price;
  const name = LoadedProducts.name;
  const rating = LoadedProducts.rating;

  const addTocartHandler = () => {
    toast("Product Added to cart");
    dispatch(
      cartActions.addTocart({
        image_link,
        price,
        id,
        name,
        rating,
        productQuantity,
      })
    );

  };

  const incerementHandler = (e) => {


    dispatch(cartActions.Productincrement());
  };

  const decerementHandler = () => {
    dispatch(cartActions.Productdecrement());
  };

  return (
    <>
      <div>
        <Navbar />
        {!LoadedProducts ? <Redirect to={"/products"} /> : (

          <div className="productdetail">
            <div>
              <Link to="/products">
                <img
                  className=" product-img card-img-top"
                  src={LoadedProducts.image_link}
                />
              </Link>
            </div>
            <div>
              <h5 className="card-title">{LoadedProducts.name}</h5>
              <h6 className="card-text">
                <strong>Brand : </strong>
                {LoadedProducts.brand}
              </h6>

              <div>
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-currency-dollar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                  </svg>
                  {LoadedProducts.price}
                </p>
              </div>

              {LoadedProducts.rating === null ? (
                ""
              ) : (
                <button type="button" className="btn btn-success btn-sm ratingbtn">
                  {LoadedProducts.rating}
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

              <button className="btn" onClick={(e) => incerementHandler(e)}>
                +
              </button>

              {productQuantity}
              <button className="btn" onClick={(e) => decerementHandler(e)}>
                -
              </button>



              <p>
                <strong>Description</strong> : {LoadedProducts.description}
              </p>
              <div>
                <button
                  variant="primary"
                  className="button"
                  onClick={addTocartHandler}

                >
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        )}


      </div>
      <ToastContainer /></>


  );

};
export default ProductDetail;
