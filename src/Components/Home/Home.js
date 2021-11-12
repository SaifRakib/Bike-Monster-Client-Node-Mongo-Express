import React from "react";
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import Products from "./Products/Products";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Testimonial></Testimonial>
      <Brand></Brand>
    </div>
  );
};

export default Home;
