import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>

      <form action="">
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
        <div className="submit">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      <p>
        Are you new here? Please <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
