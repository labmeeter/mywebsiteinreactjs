import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

import MyImage1 from "../images/image-1.jpeg";
import MyImage4 from "../images/image-4.jpeg";
import MyImage3 from "../images/image-3.jpeg";
function Cards() {
  return (
    <div className="cards">
      <h1>Check our products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={MyImage3}
              text="Eagis Hero"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage1}
              text="Eagis Pad"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage4}
              text="Aegis boost"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage3}
              text="Eagist Hero"
              label="Price:₱1000"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={MyImage3}
              text="Eagis Hero"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage1}
              text="Eagis Pad"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage4}
              text="Aegis boost"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage3}
              text="Eagist Hero"
              label="Price:₱1000"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={MyImage3}
              text="Eagis Hero"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage1}
              text="Eagis Pad"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage4}
              text="Aegis boost"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage3}
              text="Eagist Hero"
              label="Price:₱1000"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={MyImage3}
              text="Eagis Hero"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage1}
              text="Eagis Pad"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage4}
              text="Aegis boost"
              label="Price:₱1000"
              path="/"
            />
            <CardItem
              src={MyImage3}
              text="Eagist Hero"
              label="Price:₱1000"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
