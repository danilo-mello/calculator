import React, { useRef } from "react";

const Input = ({ id, type, onChange, placeholder, required, onKeyUp, value }) => {

  return (
      <input
        id={id}
        value={value}
        type={type}
        onChange={(e) => {onChange(e)}}
        placeholder={placeholder}
        required={required}
        className="Input"
        onKeyUp={(e) => {onKeyUp(e)}}
      />
  );
};

export default Input;
