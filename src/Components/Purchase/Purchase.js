import React from "react";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2>Purchase</h2>
      <div className="purchase">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="purchase-details">
                <div className="purchase-img">
                  <img src="" alt="" />
                </div>
                <div className="purchase-item-info">
                  <p>Name</p>
                  <p>Price</p>
                  <p>Color</p>
                  <p>Description</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="purchase-information">
                <div className="container text-center my-5">
                  <h2 className="text-center my-5">
                    Add Your Information for Shipping
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Your Name"
                      className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                      {...register("email", { required: true })}
                      placeholder="Your email address"
                      className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                      type="number"
                      {...register("phone", { required: true })}
                      placeholder="Your Phone Number"
                      className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                      {...register("address", { required: true })}
                      placeholder="Address"
                      className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                      {...register("comment")}
                      placeholder="Your Opinion"
                      className="mb-2 p-2"
                    />{" "}
                    <br />
                    {(errors.name,
                    errors.email,
                    errors.phone,
                    errors.address) && <span>This field is required</span>}{" "}
                    <br />
                    <input className="btn btn-primary" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
