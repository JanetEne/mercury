import React from "react";
import "./styles.scss";

const Spinner = () => {
  return (
    <div className="loaderContainer">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
