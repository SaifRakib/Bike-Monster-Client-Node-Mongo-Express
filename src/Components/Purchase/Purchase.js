import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:8080/allProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/order", data).then((res) => {
      if (res.data.insertedId) {
        alert("Your Order Process.Thank You.");
        reset();
      }
    });
    console.log(data);
  };
  return (
    <div>
      <div className="purchase">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="purchase-details">
                <div className="purchase-img">
                  <img src={product?.img} className="img-fluid w-100" alt="" />
                </div>
                <div className="purchase-item-info">
                  <p>{product?.name}</p>
                  <p>{product?.price}</p>
                  <p>{product?.color}</p>
                  <p>{product?.description}</p>
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
                      defaultValue={user.displayName}
                      placeholder="Your Name"
                      className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                      {...register("email", { required: true })}
                      defaultValue={user.email}
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
                      {...register("item", { required: true, disabled: true })}
                      placeholder="Selected Product"
                      defaultValue={product.name}
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
