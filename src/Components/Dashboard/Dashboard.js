import React, { useState } from "react";
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageOrders from "./ManageOrders/ManageOrders";

const Dashboard = () => {
  const [control, setControl] = useState("allVolunteers");
  return (
    <div>
      <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-3 ">
                <div className="admin-area p-1">
                  <h6>Dashboard</h6>
                  <div className="all-menu mt-5">
                    <li
                      onClick={() => setControl("addProduct")}
                      className="admin-menu p-2"
                    >
                      Add Services
                    </li>
                    <li
                      onClick={() => setControl("manageOrders")}
                      className="admin-menu p-2"
                    >
                      Manage Orders
                    </li>
                    <li
                      onClick={() => setControl("makeAdmin")}
                      className="admin-menu p-2"
                    >
                      My Orders
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-9 text-center  text-center">
                {control === "addProduct" && <AddProduct></AddProduct>}
                {control === "manageOrders" && <ManageOrders></ManageOrders>}
                {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
