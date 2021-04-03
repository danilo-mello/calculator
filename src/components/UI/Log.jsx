import React from "react";

const Log = ({ log }) => {

  const logMap = log.map((l, index) => <li key={index}>{l}</li>)

  return (
    <div className="Log">
      Log
      <br />
      <ul>{logMap}</ul>
    </div>
  );
};

export default Log;
