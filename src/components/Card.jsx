import React from "react";
import { Link } from "react-router-dom";

import "../styles/card.css";

import image1 from "../assets/bitcoin.jpg";
import image2 from "../assets/bitcoin.jpg";
import image3 from "../assets/bitcoin.jpg";
import image4 from "../assets/bitcoin.jpg";

const Card = () => {
  return (
    <div className="cards">
      <Link to="/">
        <div className="card card1">
          <div className="img__container">
            <img
              className="img__item"
              loading="lazy"
              src={image1}
              alt=""
            />
          </div>
          <div className="details">
            <h5>Title</h5>
            <p>
              Content
            </p>
          </div>
        </div>
      </Link>

      <Link to="/">
        <div className="card card2">
          <div className="img__container">
            <img
              className="img__item"
              loading="lazy"
              src={image2}
              alt=""
            />
          </div>
          <div className="details">
            <h5>Title</h5>
            <p>Content</p>
          </div>
        </div>
      </Link>

      <Link to="/">
        <div className="card card3">
          <div className="img__container">
            <img
              className="img__item"
              loading="lazy"
              src={image3}
              alt=""
            />
          </div>
          <div className="details">
            <h5>Title</h5>
            <p>Content</p>
          </div>
        </div>
      </Link>

      <Link to="/">
        <div className="card card4">
          <div className="img__container">
            <img
              className="img__item"
              loading="lazy"
              src={image4}
              alt=""
            />
          </div>
          <div className="details">
            <h5>Title</h5>
            <p>Content</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
