import React, { useCallback, useEffect, useState, useContext } from "react";

import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import { fetchLogsStartAsync, deleteLog, updateLog } from '../../redux/log/log.actions'
import { UserContext } from "../../context/UserProvider";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import Button from "../UI/Button";

const LogModal = ({logs, fetchLogsStartAsync, deleteLog, updateLog, ...props}) => {

  const [dateModified, setDateModified] = useState("");
  const [comment, setComment] = useState("");

  const [userLog, setUserLog] = useState({
    id: "",
    title: "",
    log: [],
    result: "",
    comment: "",
    dateCreated: "",
    dateModified: "",
    active: ""
  });

  const userContext = useContext(UserContext);

  const dateUser = () => {
    var date = new Date();
    setDateModified(date.getTime());
  };

  useEffect(() => {

    userContext && fetchLogsStartAsync(userContext.uid);
    userContext && dateUser();

    if(logs){
      for (let i = 0; i < logs.length; i++) {
        if (logs.[i].id === props.match.params.id) {
          setUserLog(logs[i])
          setComment(logs[i].comment)
        }
      }
    }
  }, [userContext, fetchLogsStartAsync]);

  const onKeyUpHandler = (e) => {
    console.log(e.target.value)
  }

  const history = useHistory();

  const handleBack = useCallback(() => history.push("/mylogs"), [history]);

  const deleteHandler = (e) => {
    e.preventDefault()

    deleteLog({
      logId: userLog.id, 
      userId: userContext.uid
    })

    handleBack()

  }

  const dateHandler = (date) => {
    
    var theDate = new Date(date);
    return theDate.toLocaleDateString();
    
  }

  const onSaveLogHandler = (e) => {
    e.preventDefault();

    let updatedLog = {
      title: userLog.title,
      log: userLog.log,
      result: userLog.result,
      comment: comment,
      meta: {
        dateCreated: userLog.dateCreated,
        dateModified: dateModified,
        active: "true",
        userId: userContext.uid,
      },
    }

    updateLog({
      updatedLog: updatedLog, 
      logId: props.match.params.id
    })
    
  }

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
            console.log(e.target.value);
          }}
          placeholder="Title"
          required={true}
          onKeyUp={onKeyUpHandler}
          value={userLog.title}
        />
        <Textarea
          id="log"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder="Log"
          defaultValue={userLog.log}
          required={true}
        />
        <Input
          id="result"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder="Result"
          value={userLog.result}
          required={true}
          onKeyUp={onKeyUpHandler}
        />
      </div>
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-wrap content-between p-2 border">
        <Textarea
          id="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          defaultValue={comment}
          placeholder="Comment"
          onKeyUp={onKeyUpHandler}
        />

        <p className="Button">date created: {dateHandler(userLog.dateCreated)}</p>
        <p className="Button">date modified: {dateHandler(userLog.dateModified)}</p>

        <Button button="Back" onClick={handleBack} />
        <Button button="Delete" onClick={(e) => deleteHandler(e)} />
        {userLog.comment !== comment ? (
          <Button type="submit" button="Save Edit" />
        ) : null}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
    logs: state.log.userLogs
})

const mapDispatchToProps = (dispatch) => ({
    fetchLogsStartAsync: (uid) => dispatch(fetchLogsStartAsync(uid)),
    deleteLog: (obj) => dispatch(deleteLog(obj)),
    updateLog: (obj) => dispatch(updateLog(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogModal);
