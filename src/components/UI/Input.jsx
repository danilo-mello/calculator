import React from "react";

const Input = ({ id, type, onChange, placeholder, defaultValue, onKeyUp }) => {
  return (
    <input
      id={id}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="Input"
      onKeyUp={(e) => {onKeyUp(e)}}
    />
  );
};

export default Input;
