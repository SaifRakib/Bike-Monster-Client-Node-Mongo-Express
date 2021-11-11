import React, { useState } from "react";
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import ManageProducts from "./ManageProdcts/ManageProducts";
import MyOrders from "./MyOrders/MyOrders";
import Payment from "./Payment/Payment";
import Review from "./Review/Review";

const Dashboard = () => {
  const [control, setControl] = useState("allVolunteers");
  return (
    <div>
      <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-2 ">
                <div className="admin-area p-1">
                  <h6>Dashboard</h6>
                  <div className="all-menu mt-5">
                    <li
                      onClick={() => setControl("payment")}
                      className="admin-menu p-2"
                    >
                      Pay
                    </li>
                    <li
                      onClick={() => setControl("myOrders")}
                      className="admin-menu p-2"
                    >
                      My Orders
                    </li>
                    <li
                      onClick={() => setControl("review")}
                      className="admin-menu p-2"
                    >
                      Review
                    </li>

                    <li
                      onClick={() => setControl("addProduct")}
                      className="admin-menu p-2"
                    >
                      Add Product
                    </li>
                    <li
                      onClick={() => setControl("manageProducts")}
                      className="admin-menu p-2"
                    >
                      Manage Products
                    </li>
                    <li
                      onClick={() => setControl("makeAdmin")}
                      className="admin-menu p-2"
                    >
                      Make Admin
                    </li>
                    <li
                      onClick={() => setControl("manageAllOrders")}
                      className="admin-menu p-2"
                    >
                      Manage All Orders
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-10 text-center  text-center">
                {control === "payment" && <Payment></Payment>}
                {control === "myOrders" && <MyOrders></MyOrders>}
                {control === "review" && <Review></Review>}

                {control === "addProduct" && <AddProduct></AddProduct>}
                {control === "manageProducts" && (
                  <ManageProducts></ManageProducts>
                )}
                {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                {control === "manageAllOrders" && (
                  <ManageAllOrders></ManageAllOrders>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
