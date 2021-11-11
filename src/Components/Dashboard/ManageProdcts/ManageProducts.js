import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/allProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [control]);

  // Handle delete orders
  const handleDeleteProduct = (id) => {
    let confirmation = window.confirm(
      "Are you sure!! Your want to delete product?"
    );
    if (confirmation === true) {
      fetch(`http://localhost:8080/deleteProduct/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(!control);
          } else {
            setControl(false);
          }
        });
    }
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <div>
        <h1>All Products : {products.length}</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          {products.map((product, index) => (
            <tbody key={product._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price} BDT</td>
                <td>{product.color}</td>

                <td>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn text-white bg-danger mx-2 p-2"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
