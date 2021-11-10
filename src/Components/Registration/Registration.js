import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container">
      <h2>Registration</h2>

      <form action="">
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="form-group">
          <label for="password2">Password</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            placeholder="Re-Enter Your Password"
          />
        </div>
        <div className="submit">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
      <p>
        Already have account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Registration;
