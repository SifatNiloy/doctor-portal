import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <h2 className="text-5xl p-8 welcome-text">
        Welcome to doctors portal. How can we help?
      </h2>
      <div className="boxes">
        <div className="box bg-green-500 text-xl text-white">
          Find a location
        </div>
        <div className="box bg-blue-500 text-xl text-white">Find a doctor</div>
        <div className="box bg-sky-500 text-xl text-white">Patient Portal</div>
        <div className="box bg-cyan-500 text-xl text-white">Pay my bill</div>
      </div>
    </div>
  );
};

export default Home;
