import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Map from "../Map/Map";

const Home = () => {
  return (
    <div className="mx-12">
      <Banner />
      <Blogs />
      <Map/>
    </div>
  );
};

export default Home;
