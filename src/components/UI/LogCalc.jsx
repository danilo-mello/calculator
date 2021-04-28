import React from "react";

const LogCalc = ({ calclog }) => {
  
  const logMap = calclog.map((l, index) => <li key={index}>{l}</li>);


  return (
    <div className="LogCalc">
      Log
      <br />
      <ul>{logMap}</ul>
    </div>
  );
};

export default LogCalc;
