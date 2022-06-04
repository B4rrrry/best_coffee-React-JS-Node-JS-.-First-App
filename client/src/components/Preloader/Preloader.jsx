import React from "react";
import preloader from "./preloader.gif";

const Preloader = ({ loading }) => {
  return (
    <div
      className={
        loading ? `preloader__wrap preloader__wrap--active` : `preloader__wrap`
      }
    >
      <img className="preloader" src={preloader} alt="Preloader" />
    </div>
  );
};

export default Preloader;
