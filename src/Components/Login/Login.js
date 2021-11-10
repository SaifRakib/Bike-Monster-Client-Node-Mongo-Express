import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInUsingGoogle, isLoading, authError } =
    useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
  };
  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            onChange={handleOnChange}
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            onChange={handleOnChange}
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="submit">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        {isLoading && (
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
        {user?.email && (
          <div class="alert alert-success" role="alert">
            Login Succesfully!
          </div>
        )}
        {authError && (
          <div class="alert alert-danger" role="alert">
            {authError}
          </div>
        )}
      </form>
      <p>
        Are you new here? Please <Link to="/register">Sign Up</Link>
        <hr />
        <button onClick={handleGoogleSignIn}>Sign in With Google</button>
      </p>
    </div>
  );
};

export default Login;
