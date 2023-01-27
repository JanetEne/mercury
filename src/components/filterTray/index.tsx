import ButtonComponent from "components/button";
import InputComponent from "components/input";
import React from "react";
import "./styles.scss";

const FilterTray = () => {
  return (
    <div className="filterTrayContainer">
      <div className="filterProperties">
        <h3>Organization</h3>
        <div className="selectContainer">
          <select>
            <option>Select</option>
          </select>
        </div>
      </div>
      <div className="filterProperties">
        <h3>Username</h3>
        <InputComponent type={"text"} placeholder={"User"} />
      </div>
      <div className="filterProperties">
        <h3>Email</h3>
        <InputComponent type={"email"} placeholder={"Email"} />
      </div>
      <div className="filterProperties">
        <h3>Date</h3>
        <InputComponent type={"date"} placeholder={"Date"} />
      </div>
      <div className="filterProperties">
        <h3>Phone Number</h3>
        <InputComponent type="text" placeholder={"Phone Number"} />
      </div>
      <div className="filterProperties">
        <h3>Status</h3>
        <div className="selectContainer">
          <select>
            <option>Select</option>
          </select>
        </div>
      </div>
      <div className="buttonContainer">
        <ButtonComponent text={"Reset"} variant={"reset"} />
        <ButtonComponent text={"Filter"} variant={"fluid"} />
      </div>
    </div>
  );
};

export default FilterTray;
