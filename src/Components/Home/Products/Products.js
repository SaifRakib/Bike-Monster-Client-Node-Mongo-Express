import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/allProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container">
        <h2 className="text-center my-5">Our Popular Bike</h2>
        {products.length === 0 ? (
          <div className="text-center">
            <div className="spinner-border text-dark my-5" role="status">
              <p className="sr-only my-5">Loading...</p>
            </div>
          </div>
        ) : (
          <div className="card-deck my-5">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;