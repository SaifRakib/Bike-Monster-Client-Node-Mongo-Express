import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:8080/myOrders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  // Handle delete orders
  const handleDeleteOrder = (id) => {
    let confirmation = window.confirm("Are you sure!! Your want to delete it?");
    if (confirmation === true) {
      fetch(`http://localhost:8080/deleteOrder/${id}`, {
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
      <h2>My orders</h2>
      <div>
        <h1>All Orders : {orders.length}</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <tbody key={order._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.item}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
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

export default MyOrders;
