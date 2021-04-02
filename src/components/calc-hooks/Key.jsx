import React from "react";

const Key = ({ id, onClick, keyboard }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="h-16 w-16 text-gray-300 hover:text-gray-200 bg-white to-gray-800 bg-opacity-20 hover:bg-opacity-30 border-t border-gray-400 duration-300 shadow-md rounded-lg m-1"
    >
      {keyboard}
    </button>
  );
};

export default Key;
