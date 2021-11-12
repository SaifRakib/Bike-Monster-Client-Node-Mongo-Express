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
    fetch(`https://warm-basin-61820.herokuapp.com/allProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const onSubmit = (data) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    data.date = today;

    const status = "Pending";
    data.status = status;

    axios
      .post("https://warm-basin-61820.herokuapp.com/order", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Your Order Process.Thank You.");
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div>
      <div className="purchase my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="purchase-details">
                <div className="purchase-img">
                  <img src={product?.img} className="img-fluid w-100" alt="" />
                </div>
                <div className="purchase-item-info my-4">
                  <h2>{product?.name}</h2>
                  <h4>Price: {product?.price}</h4>
                  <h5>Color: {product?.color}</h5>
                  <h5>Weight: {product?.weight} Kg</h5>
                  <h5>Engine Capacity: {product?.engine} CC</h5>
                  <p className="mt-4">{product?.description}</p>
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
                      {...register("item", { required: true })}
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
