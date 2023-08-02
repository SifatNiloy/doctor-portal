import React from "react";
import location from "../../../assets/icons/location.png";
import stethoscope from "../../../assets/icons/stethoscope.png";
import user from "../../../assets/icons/user.png";
import graduated from "../../../assets/icons/graduated.png";
import banner from '../../../assets/images/banner-img.png';
import "./Banner.css";
const Banner = () => {
  return (
    <div className="home">
      <h2 className="text-6xl p-8 welcome-text text-blue-700">
        Welcome to doctors portal. <br /> How can we help?
      </h2>
      <div className="boxes">
        <div className="box bg-green-500 text-xl text-white text-center">
          <img className="icon" src={location} alt="" />
          <h2> Find a location</h2>
        </div>
        <div className="box bg-blue-500 text-xl text-white text-center">
          <img className="icon" src={stethoscope} alt="" />
          <h2>Find a doctor</h2>
        </div>
        <div className="box bg-sky-500 text-xl text-white text-center">
          <img className="icon" src={user} alt="" />
          <h2>Patient Portal</h2>
        </div>
        <div className="box bg-cyan-500 text-xl text-white text-center">
          <img className="icon" src={graduated} alt="" />
          <h2>student profile</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;



