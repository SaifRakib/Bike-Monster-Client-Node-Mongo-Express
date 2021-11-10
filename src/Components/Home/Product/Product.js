import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, price, img } = props.product;
  return (
    <div className="service">
      <div className="card">
        <img
          className="card-img-top img-fluid w-100"
          src={img}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title text-info mb-3">{name}</h5>
          <div className="services-info mb-3">{price}</div>
          <div className="service_short_desc"></div>
          <div className="service-price text-center"></div>
        </div>
        <div className="text-center mb-4 mt-3">
          <Link to={`/services/id`}>
            <button className="btn btn-warning text-white">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
