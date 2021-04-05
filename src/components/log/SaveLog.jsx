import React, { useState } from "react";
import LogForm from "./LogForm";

const SaveLog = () => {
  const [saving, setSaving] = useState(false);

  const onSaveLogHandler = () => {
    if (saving) {
      setSaving(false);
    } else {
      setSaving(true);
    }
  };

  return (
    <div className="SaveLog">
      <LogForm />
    </div>

    // saving  ?
    //     <>
    //         <LogForm />
    //         <div>
    //             <button onClick={() => {onSaveLogHandler()}}>Cancel</button>
    //         </div>
    //     </>

    // :
    //     <>
    //         <div>
    //             <button onClick={() => {onSaveLogHandler()}}>Save Log</button>
    //         </div>
    //     </>
  );
};

export default SaveLog;
