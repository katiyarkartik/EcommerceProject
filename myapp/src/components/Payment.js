import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const Payment = () => {
  return (
    <div className="payment">
      <div className="success">
        <p>Order Success</p>
        <Link to={"/home"}>
          <p style={{ fontSize: "20px", color: "white" }}>Return to home</p>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
