import React from "react";

const Textarea = ({ id, type, onChange, placeholder, defaultValue }) => {
  return (
    <textarea
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="Textarea"
    />
  );
};

export default Textarea;
