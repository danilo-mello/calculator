import React from "react";

const CheckBox = ({ id, name, value, labelfor, label }) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        value={value}
        className="cursor-pointer mr-1"
      />
      <label htmlFor={labelfor}>{label}</label>
    </div>
  );
};

export default CheckBox;
