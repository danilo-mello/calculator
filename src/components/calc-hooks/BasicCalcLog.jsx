import React from "react";

const BasicCalcLog = ({ log }) => {
  const logMap = log.map((l, index) => <li key={index}>{l}</li>);

  return (
    <div className="Log">
      Log
      <br />
      <ul>{logMap}</ul>
    </div>
  );
};

export default BasicCalcLog;
