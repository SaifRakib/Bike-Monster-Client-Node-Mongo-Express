import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div className="container py-5">
      <h2 className="text-center pb-5">Registration</h2>

      <div className="row">
        <div className="col-md-8 col-12 offset-md-2">
          <div className="register-form">
            {!isLoading && (
              <form onSubmit={handleRegisterSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    onBlur={handleOnBlur}
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    onBlur={handleOnBlur}
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    onBlur={handleOnBlur}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Re-Enter Password</label>
                  <input
                    type="password"
                    onBlur={handleOnBlur}
                    className="form-control"
                    id="password2"
                    name="password2"
                    placeholder="Re-Enter Your Password"
                  />
                </div>
                <div className="submit text-center my-4">
                  <button type="submit" className="btn btn-primary">
                    Register
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
            )}
          </div>
        </div>
      </div>
      <p className="text-center">
        Already have account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Registration;
