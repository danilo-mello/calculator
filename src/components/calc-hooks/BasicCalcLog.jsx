import React from "react";

const BasicCalcLog = ({ log }) => {
  const logMap = []
  if (log) {
    logMap = log.map((l, index) => <li key={index}>{l}</li>);

  } 

  return (
    <div contenteditable="true" className="Log">
      <ul>
        <li>Log</li>
        {logMap}
      </ul>
    </div>
  );
};

export default BasicCalcLog;
