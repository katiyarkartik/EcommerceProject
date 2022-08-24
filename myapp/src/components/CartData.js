import React from "react";
import { useSelector } from "react-redux";
import CartComp from "./CartComp";
import { Link } from "react-router-dom";
const CartData = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  var sum = 0;
  return (
    <div>
      <p style={{ fontSize: "32px", fontWeight: "bold", marginTop: "10px" }}>
        Total Item {getData.length}
      </p>

      {getData.length &&
        getData.map((p) => {
          sum = sum + p.price;
        })}

      <div className="total-cost">
        <div className="total-cost-data">Total Cart Price : {sum}</div>
        <div className="proceed-cost">
          <Link to={"/payment"}>
            <div className="proceed">
              <button>Pay</button>
            </div>
          </Link>
        </div>
      </div>
      {getData.length
        ? getData.map((e) => {
            return (
              <CartComp
                name={e.rname}
                img={e.imgdata}
                price={e.price}
                rating={e.rating}
              />
            );
          })
        : null}
    </div>
  );
};

export default CartData;
