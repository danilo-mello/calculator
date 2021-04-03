import React from "react";

const Log = ({ log }) => {

  const logMap = log.map((l, index) => <li key={index}>{l}</li>)

  return (
    <div className="h-64 lg:h-96 w-full bg-white bg-opacity-20 hover:bg-opacity-10 duration-300 outline-none shadow-inner rounded-lg p-4">
      Log
      <br />
      <ul>{logMap}</ul>
    </div>
  );
};

export default Log;
