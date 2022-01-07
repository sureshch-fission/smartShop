import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";


import NavBar from "./components/Navbar";
import ProductsItem from "./screens/productsItemScreen";
import { productActions } from "./store/productSlice";
import LoadingSpinner from "./components/LoadingSpinner";
import Pagination from "./components/pagination";


const Products = () => {
  const dispatch = useDispatch();
  const [currentPage, setcurrentPage] = useState(1);
  const [productsperpage] = useState(12);
  const [isfiltered, setfiltered] = useState(false);

  const Products = useSelector((state) => state.Products.products);

  const filtered = useSelector((state) => state.Products.filtered);
  const message = useSelector((state) => state.Products.message);

  const keyword = useSelector((state) => state.Products.keyword);
  // setsearchTeram(keyword)

  if (filtered) {
    setfiltered(true);
  }

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      const data = await response.json();

      data.map((item) => dispatch(productActions.fetchData(item)));
    };
    fetchProductData();
  }, [dispatch]);

  const indexOfLastpage = currentPage * productsperpage;
  const indexOfFirstpage = indexOfLastpage - productsperpage;
  const currentProduts = Products.slice(indexOfFirstpage, indexOfLastpage);


  const paginationHandler = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      {isfiltered ? (
        <strong>
          <LoadingSpinner />
          <p className="text-danger message">{message}</p>
        </strong>
      ) : (
        " "
      )}
      <div className="products">
        {Products.length === 0 ? <div className="spinner"> <LoadingSpinner /></div> : (<ProductsItem products={currentProduts} searchKeyword={keyword} />)}</div>
      <Pagination
        productsPerpage={productsperpage}
        totalProducts={Products.length}
        pagination={paginationHandler}
      />

    </>
  );
};
export default Products;
