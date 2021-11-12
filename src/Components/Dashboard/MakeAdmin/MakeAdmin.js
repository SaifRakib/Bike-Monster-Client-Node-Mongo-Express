import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:8080/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="py-5">
      <h2 className="text-center mb-4">Make admin</h2>
      <div className="adminform col-md-8 offset-2">
        <form onSubmit={handleAdminSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="mb-3">
              Email address Whom Make You Admin
            </label>
            <input
              type="email"
              className="form-control mb-4"
              onBlur={handleOnBlur}
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Make Admin
          </button>
          {success && (
            <div className="alert alert-success" role="alert">
              Admin Create Succesfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
