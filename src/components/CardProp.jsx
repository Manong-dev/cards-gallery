import React from "react";
import { Link } from "react-router-dom";

import "../styles/card.css";

const CardProp = ({ images, title1, subtitle1, title2, title3, title4, subtitle2, subtitle3, subtitle4 }) => {
  return (
    <div className="cards">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="card card-1">
          <div className="img__container">
            {images.map(({ url1, alt1 }) => {
              return (
                <img
                  className="img__item"
                  loading="lazy"
                  key={url1}
                  src={url1}
                  alt={alt1}
                />
              );
            })}
          </div>
          <div className="details">
            <h5>{title1}</h5>
            <p>{subtitle1}</p>
          </div>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="card card-1">
          <div className="img__container">
            {images.map(({ url2, alt2 }) => {
              return (
                <img
                  className="img__item"
                  loading="lazy"
                  key={url2}
                  src={url2}
                  alt={alt2}
                />
              );
            })}
          </div>
          <div className="details">
            <h5>{title2}</h5>
            <p>{subtitle2}</p>
          </div>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="card card-1">
          <div className="img__container">
            {images.map(({ url3, alt3 }) => {
              return (
                <img
                  className="img__item"
                  loading="lazy"
                  key={url3}
                  src={url3}
                  alt={alt3}
                />
              );
            })}
          </div>
          <div className="details">
            <h5>{title3}</h5>
            <p>{subtitle3}</p>
          </div>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="card card-1">
          <div className="img__container">
            {images.map(({ url4, alt4 }) => {
              return (
                <img
                  className="img__item"
                  loading="lazy"
                  key={url4}
                  src={url4}
                  alt={alt4}
                />
              );
            })}
          </div>
          <div className="details">
            <h5>{title4}</h5>
            <p>{subtitle4}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProp;
