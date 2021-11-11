import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Products from "./Products/Products";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
