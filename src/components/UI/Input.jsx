import React from "react";

const Input = ({ id, type, onChange, placeholder, defaultValue, required }) => {
  return (
    <input
      id={id}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      className="Input"
    />
  );
};

export default Input;
