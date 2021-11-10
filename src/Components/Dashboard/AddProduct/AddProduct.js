import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/addProduct", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center my-5">Add New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Bike name"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            {...register("img", { required: true })}
            placeholder="Bike Image Link"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price (BDT)"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            type="number"
            {...register("weight", { required: true })}
            placeholder="Bike Weight (KG)"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            type="number"
            {...register("engine", { required: true })}
            placeholder="Engine Capacity (CC)"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            {...register("description", { required: true })}
            placeholder="Description"
            className="mb-2 p-2"
          />{" "}
          <br />
          <input
            {...register("color", { required: true })}
            placeholder="Bike color"
            className="mb-2 p-2"
          />{" "}
          <br />
          {(errors.name,
          errors.img,
          errors.price,
          errors.weight,
          errors.engine,
          errors.description,
          errors.color) && <span>This field is required</span>}{" "}
          <br />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
