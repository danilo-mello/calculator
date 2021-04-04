import React, { useState, useContext, useEffect } from "react";
import { CalcContext } from "../../context/CalcProvider";
import { LogContext } from "../../context/LogProvider";
import { UserContext } from "../../context/UserProvider";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import Button from "../UI/Button";

const LogForm = () => {
  const calcContext = useContext(CalcContext);
  const logContext = useContext(LogContext);
  const userContext = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [log, setLog] = useState(calcContext.calclog);
  const [comment, setComment] = useState("");
  const [result, setResult] = useState(calcContext.result);
  const [dateCreated, setDateCreated] = useState("");
  const [dateModified, setDateModified] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const dateUser = () => {
      var date = new Date();
      setDateCreated(date.getTime());
      setDateModified(date.getTime());
      setUserId(userContext.uid);
    };
    dateUser();
  }, [calcContext, userContext.uid]);

  const onSaveLogHandler = (e) => {
    e.preventDefault();

    logContext.onSaveLog({
      title: title,
      log: log,
      result: result,
      comment: comment,
      meta: {
        dateCreated: dateCreated,
        dateModified: dateModified,
        active: "true",
        userId: userId,
      },
    });
  };

  return (
    <form
      onSubmit={(e) => {
        onSaveLogHandler(e);
      }}
      className="h-3/4 lg:h-2/3 w-4/5 sm:w-2/3 flex flex-wrap border"
    >
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-wrap content-between p-2 border">
        <Input
          id="title"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
        />
        {/* <div className="h-1/2 lg:h-2/3 w-full">
              <BasicCalcLog log={calcContext.calclog} />
            </div> */}
        {/* <Input
          id="log"
          type="text-area"
          onChange={(e) => {
            setLog(e.target.value);
          }}
          placeholder="Log"
        /> */}
        <Textarea
          id="log"
          onChange={(e) => {
            setLog(e.target.value);
          }}
          placeholder="Log"
          defaultValue={calcContext.calclog}
        />
        <Input
          id="result"
          type="text"
          onChange={(e) => {
            setResult(e.target.value);
          }}
          placeholder="Result"
          defaultValue={calcContext.result}
        />
      </div>
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-wrap content-between p-2 border">
        <Textarea
          id="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="Comment"
        />
        <Button button="Cancel" />
        <Button type="submit" button="Save" />
      </div>
    </form>

    // <div>
    //     <form onSubmit={e => {onSaveLogHandler(e)}}>
    //         <label>Title: </label>
    //         <input type="text" id="title" onChange={(e) => {setTitle(e.target.value)}} />

    //         <label>Log: </label>
    //         <input type="text-area" id="log" defaultValue={calcContext.calclog} onChange={(e) => {setLog(e.target.value)}} />

    //         <label>Result: </label>
    //         <input type="text" id="result" defaultValue={calcContext.result} onChange={(e) => {setResult(e.target.value)}} />

    //         <label>Comment: </label>
    //         <input type="text-area" id="comment" onChange={(e) => {setComment(e.target.value)}} />

    //         <button type="submit">Confirm Save Log</button>
    //     </form>

    // </div>
  );
};

export default LogForm;
