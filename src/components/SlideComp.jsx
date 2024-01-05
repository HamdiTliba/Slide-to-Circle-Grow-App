import React from "react";
import "./SlideComp.modulus.css";
const SlideComp = ({ setValue, handleInput }) => {
  const sliderStyle = {
    appearance: "none",
    background: "#ededed",
    height: "50px",
    width: "400px",
    outline: "none",
    borderRadius: "40px",
    margin: "10px",
  };
  return (
    <input
      className="slider"
      style={sliderStyle}
      type="range"
      min={0}
      max={100}
      value={setValue}
      onInput={handleInput}
    />
  );
};

export default SlideComp;
