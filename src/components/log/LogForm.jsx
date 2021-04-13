import React, { useState, useContext, useEffect, useCallback } from "react";
import { CalcContext } from "../../context/CalcProvider";
import { LogContext } from "../../context/LogProvider";
import { UserContext } from "../../context/UserProvider";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import Button from "../UI/Button";
import {useHistory} from 'react-router-dom';


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
    
    userContext && dateUser();
  }, [calcContext]);

  const history = useHistory();

  const handleCancel = useCallback(() => history.push('/'), [history]);

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
        <Button button="Cancel" onClick={handleCancel} />
        <Button type="submit" button="Save" />
      </div>
    </form>

  );
};

export default LogForm;
