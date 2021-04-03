import React from "react";

const Input = ({ type, defaultValue, placeholder }) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="Input"
    />
  );
};

export default Input;
