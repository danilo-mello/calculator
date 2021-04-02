import React from "react";

const Key = ({ id, onClick, keyboard }) => {
  return (
    <button id={id} onClick={onClick} className="h-16 w-16 border">
      {keyboard}
    </button>
  );
};

export default Key;
