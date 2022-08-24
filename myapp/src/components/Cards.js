import React from "react";
import CarouselComp from "./Carousel";
import { Card, Button } from "react-bootstrap";
import Cardsdata from "./CardsData";
import { useState } from "react";
import "./Style.css";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  let navigate = useNavigate();
  const [data, setData] = useState(Cardsdata);
  var sum = 0;
  const dispatch = useDispatch(() => {});

  const send = (e) => {
   
    console.log(e);
    dispatch(ADD(e));
    sum = sum + e.price;
    console.log(sum);
  };
  return (
    <div>
      <CarouselComp />
      <Category />
      <div className="conatainer mt-3">
        <h2>New Collection</h2>{" "}
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((element, id) => {
            return (
              <>
                <Card
                  style={{ width: "22rem" }}
                  className="mx-2 mt-4 card_style "
                >
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>Price : ₹ {element.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button
                        variant="primary"
                        onClick={() => send(element)}
                        className="col-lg-12 add-btn"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
