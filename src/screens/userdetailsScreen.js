import React from "react";
import { useHistory, } from 'react-router-dom'
import { useDispatch } from "react-redux";
import "../UI/products.css";
import Navbar from "../components/Navbar";
import { loginActions } from "../store/loginSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userDetails"));
  const history = useHistory();



  const logoutHandler = () => {
    dispatch(loginActions.logout());
    history.push('/');

    localStorage.removeItem('userDetails');
  }

  return (
    <div>
      <Navbar />


      <div className="card ProductCard userDetails">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="currentColor"
          className="bi bi-person-circle user-icon usedetails-icon"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <ul>
          <li>
            {" "}
            Name : <strong>Suresh</strong>
          </li>
          <li>
            Username : <strong> {userData.email}</strong>
          </li>
          <li>
            password: <strong> {userData.password}</strong>
          </li>
          <li>
            {" "}
            Phone Number : <strong>+91-99776655</strong>
          </li>
        </ul>
        <button className="btn btn-danger logoutbtn" onClick={logoutHandler}>Logout</button>
      </div>

    </div>
  );
};
export default UserDetails;
