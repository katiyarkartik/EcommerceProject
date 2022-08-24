import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="category">
      <div className="grocery group">
        <Link to={"/grocery"}>
          <div className="img-group">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              alt=""
            />
          </div>
          <p>Grocery</p>{" "}
        </Link>
      </div>
      <div className="clothing group">
        <Link to={"/clothing"}>
          <div className="img-group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyn9GHcqWqqR_ZLOtoebGNsdbXzrzLW5ETg&usqp=CAU"
              alt=""
            />
          </div>
          <p>Clothing</p>{" "}
        </Link>
      </div>
      <div className="electronics group">
        <Link to={"/electronucs"}>
          <div className="img-group">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <p>Electronics</p>{" "}
        </Link>
      </div>{" "}
      <div className="toys group">
        <Link to={"/toys"}>
          <div className="img-group">
            <img
              src="https://images.pexels.com/photos/6743164/pexels-photo-6743164.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <p>Toys</p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
