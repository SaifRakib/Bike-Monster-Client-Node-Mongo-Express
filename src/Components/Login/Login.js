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
    <div className="container py-5">
      <h2 className="text-center pb-5">Login</h2>

      <div className="row">
        <div className="col-md-8 col-sm-8 col-8 offset-2">
          <div className="login-form">
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group mb-3">
                <input
                  type="email"
                  onChange={handleOnChange}
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  onChange={handleOnChange}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="submit text-center">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
              {isLoading && (
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              )}
              {user?.email && (
                <div className="alert alert-success" role="alert">
                  Login Succesfully!
                </div>
              )}
              {authError && (
                <div className="alert alert-danger" role="alert">
                  {authError}
                </div>
              )}

              <p>
                Are you new here? Please <Link to="/register">Sign Up</Link>{" "}
              </p>
              <hr />
              <div className="googleSign text-center">
                <button
                  className="btn btn-secondary text-white"
                  onClick={handleGoogleSignIn}
                >
                  Sign in With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
