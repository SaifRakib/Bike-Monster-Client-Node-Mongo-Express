import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/addReview", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center my-5">Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            {...register("occupation", { required: true })}
            placeholder="Your Occupation"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            type="number"
            {...register("rating", { required: true, min: 1, max: 5 })}
            placeholder="Given Rating between 1-5"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            {...register("opinion", { required: true })}
            placeholder="Your Opinion"
            className="mb-2 p-2"
          />{" "}
          <br />
          {(errors.name, errors.occupation, errors.opinion) && (
            <span>This field is required</span>
          )}{" "}
          {errors.rating && <span>The value must be 1-5</span>}
          <br />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Review;
