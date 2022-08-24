import React from "react";
import "./CartComp.css";
import { MdDelete } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
const CartComp = ({ name, img, price, rating }) => {
  return (
    <div className="cart-comp">
      <div className="cart-item-img">
        <img src={img} />
      </div>
      <div className="cart-item-text">
        <p style={{ fontSize: "32px", fontWeight: "bold" }}>{name}</p>
        <p style={{ fontSize: "32px", fontWeight: "bold", color: "green" }}>
          <FaRupeeSign />
          {price}
        </p>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "yellow",
            width: "100px",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          {rating}
        </p>
        
      </div>
    </div>
  );
};

export default CartComp;
