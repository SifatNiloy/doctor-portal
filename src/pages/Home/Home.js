import React from "react";
import location from "../../assets/icons/location.png";
import stethoscope from "../../assets/icons/stethoscope.png";
import user from "../../assets/icons/user.png";
import invoice from "../../assets/icons/invoice.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <h2 className="text-5xl p-8 welcome-text">
        Welcome to doctors portal. How can we help?
      </h2>
      <div className="boxes">
        <div className="box bg-green-500 text-xl text-white">
          <img className="icon" src={location} alt="" />
          <h2> Find a location</h2>
        </div>
        <div className="box bg-blue-500 text-xl text-white">
          <img className="icon" src={stethoscope} alt="" />
          <h2>Find a doctor</h2>
        </div>
        <div className="box bg-sky-500 text-xl text-white">
          <img className="icon" src={user} alt="" />
          <h2>Patient Portal</h2>
        </div>
        <div className="box bg-cyan-500 text-xl text-white">
          <img className="icon" src={invoice} alt="" />
          <h2>Pay my bill</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
