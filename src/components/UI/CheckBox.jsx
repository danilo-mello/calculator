import React from "react";

const CheckBox = ({ id, name, value, labelfor, label }) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        value={value}
        className="cursor-pointer mr-2"
      />
      <label for={labelfor}>{label}</label>
    </div>
  );
};

export default CheckBox;
