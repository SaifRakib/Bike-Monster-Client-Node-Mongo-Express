import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://warm-basin-61820.herokuapp.com/allProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-secondary py-5">
      <div className="container">
        <h2 className="text-center pb-5 text-light">Our Popular Bike</h2>
        {products.length === 0 ? (
          <div className="text-center">
            <div className="spinner-border text-dark my-5" role="status">
              <p className="sr-only my-5">Loading...</p>
            </div>
          </div>
        ) : (
          <div className="card-deck">
            {products
              .map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
              .slice(0, 6)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
