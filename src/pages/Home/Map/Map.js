import React from "react";

const Map = () => {
  return (
    <div className="grid h-screen place-items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14609.01020456916!2d90.3953664!3d23.7383718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8954649cee5%3A0x3bdcd530be93b17a!2sBangabandhu%20Sheikh%20Mujib%20Medical%20University%20Hospital!5e0!3m2!1sen!2sbd!4v1690958473035!5m2!1sen!2sbd"
        width="1000"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
