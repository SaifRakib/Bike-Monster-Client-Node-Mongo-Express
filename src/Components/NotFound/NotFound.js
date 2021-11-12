import React from "react";
import imageNotFound from "./../../image/notfound.png";

const NotFound = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12 my-5">
          <div className="notFoundImage text-center">
            <img src={imageNotFound} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
