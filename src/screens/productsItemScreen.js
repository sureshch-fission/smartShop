import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import '../UI/products.css'

const ProductsItem = ({ products, searchKeyword }) => {
  const dispatch = useDispatch();

  let quantity = 1;

  const productHandler = () => {
    dispatch(cartActions.productData(quantity));
  };

  return (
    <>

      {products.filter(product => {

        if (searchKeyword === "") {
          return product;
        } else if (product.name.toLowerCase().includes(searchKeyword.toLowerCase())) {
          return product;
        }
      }).map((product) => (

        <div className="ProductCard card" key={product.id}>
          <Link to={`/product/${product.id}`} onClick={productHandler}>
            <img
              className="img card-img-top"
              src={product.image_link}
              alt="productImage"
            />
          </Link>

          <div className="card-body">
            <h6 className="card-title">
              <strong>{product.name}</strong>
            </h6>

            {product.rating === null ? (
              ""
            ) : (
              <p className="card-text ratingdiv">
                {" "}
                <strong>{product.rating}</strong>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill rating-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </p>
            )}

            <p className="card-text">
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
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default ProductsItem;
