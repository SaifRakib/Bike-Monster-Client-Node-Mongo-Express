import React from "react";
import { Link } from "react-router-dom";

const AllProduct = (props) => {
  const { name, price, img, description, weight, engine } = props.product;
  return (
    <div>
      <div className="service">
        <div className="card">
          <img
            className="card-img-top img-fluid w-100"
            src={img}
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title text-info mb-3">{name}</h5>
            <div className="services-desc mb-3">
              {description.slice(0, 100)}
            </div>
            <div className="service-info text-center">
              <p>Price {price} BDT</p>
              <p>Weight {weight} KG</p>
              <p>Engine {engine} CC</p>
            </div>
          </div>
          <div className="text-center mb-4 mt-3">
            <Link to={`/services/id`}>
              <button className="btn btn-warning text-white">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;