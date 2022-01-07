import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./searchBar";

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import "../UI/products.css";

const NavBar = () => {

  const quantity = useSelector(state => state.cart.totalQuantity);

  return (

    <div className="Navbar">
      <Link to="/products">
        <h3 className="logo-text">
          SmartShop{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-bag-dash"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </h3>
      </Link>

      <SearchBar />

      <div className="nav-ul">
        <NavLink to={"/userDetails"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-person-circle icons user-icon"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </NavLink>

        <NavLink to={"/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-cart-plus-fill icons secondary cartIcon"
            viewBox="0 0 16 16"
          >
            {" "}

            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
          </svg>
        </NavLink>
        {quantity === 0 ? '' : (
          <p className="cartQuantity">{quantity}</p>
        )}
      </div>
    </div>
  );
};
export default NavBar;
