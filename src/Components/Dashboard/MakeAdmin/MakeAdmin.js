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
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            onBlur={handleOnBlur}
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Make Admin
        </button>
        {success && (
          <div class="alert alert-success" role="alert">
            Admin Create Succesfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default MakeAdmin;
