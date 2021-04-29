import React, { useState, useContext, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import { createLog } from '../../redux/log/log.actions'

import { CalcContext } from "../../context/CalcProvider";
import { UserContext } from "../../context/UserProvider";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import Button from "../UI/Button";
import Log from "../UI/Log";

const LogForm = ({ createLog }) => {
  const calcContext = useContext(CalcContext)
  const userContext = useContext(UserContext)

  const [title, setTitle] = useState("")
  const [log, setLog] = useState(calcContext.calclog)
  const [comment, setComment] = useState("")
  const [result, setResult] = useState(calcContext.result)
  const [dateCreated, setDateCreated] = useState("")
  const [dateModified, setDateModified] = useState("")
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const dateUser = () => {
      var date = new Date()
      setDateCreated(date.getTime())
      setDateModified(date.getTime())
      setUserId(userContext.uid)
      setLog(calcContext.calclog)
    };

    userContext && dateUser();
  }, [calcContext, userContext]);

  const history = useHistory();

  const handleCancel = useCallback(() => history.push("/"), [history]);

  const onSaveLogHandler = (e) => {
    e.preventDefault();

    if (title && log && result && comment){

      let userLog = {
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

      }

      createLog(userLog)
      
      history.push("/");


    } else (
      alert("Please fill up all fields!!")
    )
  }

  const onKeyUpHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <form
      onSubmit={(e) => {
        onSaveLogHandler(e);
      }}
      className="h-3/4 lg:h-2/3 w-4/5 sm:w-2/3 flex flex-wrap"
    >
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-wrap content-between p-2">
        <Input
          id="title"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
          required={true}
          onKeyUp={onKeyUpHandler}
        />
        <Log calclog={calcContext.calclog} />
        <Input
          id="result"
          type="text"
          onChange={(e) => {
            setResult(e.target.value);
          }}
          placeholder="Result"
          value={calcContext.result}
          required={true}
          onKeyUp={onKeyUpHandler}
        />
      </div>
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-wrap content-between p-2 ">
        <Textarea
          id="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="Comment"
        />
        <Button button="Back" onClick={handleCancel} />
        {title && log && result ? (
          <Button type="submit" button="Save" />
        ) : null}
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
    createLog: (log) => dispatch(createLog(log)),
})


export default connect(null, mapDispatchToProps)(LogForm);
