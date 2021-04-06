import React from "react";

const Log = ({ calclog }) => {
  
  const logMap = calclog.map((l, index) => <li key={index}>{l}</li>);


  return (
    <div className="Log">
      Log
      <br />
      <ul>{logMap}</ul>
    </div>
  );
};

export default Log;
