import React from "react";
import Log from "../UI/Log";
import Textarea from "../UI/Textarea";

const BasicCalcLog = (props) => {
  return <Log log={props.calclog} />;
};

export default BasicCalcLog;

// return <Log calclog={props.calclog} />;
// return <Textarea textarea={props.calclog} />;

{
  /* <input type="textarea" placeholder="Log" className="Log">
  {calclog}
</input> */
}
