import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginActions } from "../store/loginSlice";
import LoadingSpinner from "./LoadingSpinner";
import "../UI/login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();

  const [Error, setError] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const emialHandler = (e) => {
    setemail(e.target.value);
  };

  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      toast('Please Fill in All fields')
    } else {
      <LoadingSpinner />;
      history.push("/products");
      dispatch(loginActions.login());




    }

    const userDetails = {
      email,
      password,
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };


  return (
    <>

      <div className="Navbar">

        <h3 className="logo-text">
          SmartShop{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
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


      </div>

      <div>
        <form onSubmit={formSubmitHandler} className="form-container">
          <h1>Login Page</h1>
          <div>
            <input
              type="email"
              placeholder="Email-id..."
              onChange={emialHandler}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={passwordHandler}
              minLength={8}
            />
          </div>

          <button type="submit" className="btn btn-2 button">
            Login
          </button><ToastContainer />
        </form>
      </div>

    </>

  );
};
export default Login;
