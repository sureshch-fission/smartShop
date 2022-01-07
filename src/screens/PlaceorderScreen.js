import React, { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";

const PlaceOrder = () => {
  const [isLoading, setLoading] = useState(true);

  setInterval(() => {
    setLoading(false);
  }, 2000);


  return (
    <div>
      <Navbar />
      <div className="productorder">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="orderplaced">
            <h1>Order Placed 😃</h1>
            <strong>
              {" "}
              <p className="text-success">Thank You for shopping....</p>
            </strong>
          </div>
        )}

      </div>

    </div>
  );
};
export default PlaceOrder;
