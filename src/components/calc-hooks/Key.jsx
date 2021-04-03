import React from "react";

const Key = ({ id, onClick, keyboard }) => {
  return (
    <button id={id} onClick={onClick} className="Key">
      {keyboard}
    </button>
  );
};

export default Key;
