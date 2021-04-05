import React from "react";

const Input = ({ id, type, onChange, placeholder, defaultValue }) => {
  return (
    <input
      id={id}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="Input"
    />
  );
};

export default Input;
