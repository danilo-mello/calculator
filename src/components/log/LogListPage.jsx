import React, { useContext, useEffect } from "react";

import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import { fetchLogsStartAsync, deleteLog, sortLogs } from '../../redux/log/log.actions'
import { UserContext } from "../../context/UserProvider";
// import CheckBox from "../UI/CheckBox";
import SearchBar from "../UI/SearchBar";

const LogListPage = ({ logs, fetchLogsStartAsync, deleteLog, sortLogs }) => {

  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext && fetchLogsStartAsync(userContext.uid);
    
  }, [userContext, fetchLogsStartAsync]);

  const deleteHandler = (e) => {

    deleteLog({
      logId: e.target.parentElement.id, 
      userId: userContext.uid
    })

  }

  const dateHandler = (date) => {
    
    var theDate = new Date(date);
    return theDate.toLocaleDateString();
    
  }

  const filterHandle = (e) => {
    sortLogs(e.target.id)
  }
  
  return (
    <div className="LogList relative">
      <div className="w-5/6">
        <div className="Filter">

          <p>filter by:</p>
          <p id="title" onClick={(e) => filterHandle(e)}>Title</p>
          <p id="result" onClick={(e) => filterHandle(e)}>Result</p>
          <p id="dateCreated" onClick={(e) => filterHandle(e)}>Date Created</p>
          <p id="dateModified" onClick={(e) => filterHandle(e)}>Date Modified</p>
          

          {/* <CheckBox value="title" labelfor="title" label="Title" />
          <CheckBox value="result" labelfor="result" label="Result" />
          <CheckBox value="dateCreated" labelfor="dateCreated" label="Date Created" />
          <CheckBox value="dateModified" labelfor="dateModified" label="Date Modified" /> */}

          <SearchBar />
        </div>
        {logs && logs.map(
            ({
              id,
              title,
              log,
              result,
              comment,
              dateCreated,
              dateModified,
              active,
            }) => (
              <div key={id} id={id}  className="MyLog">

                <p>title: {title}</p>
                <p>result: {result}</p>
                <p>date created: {dateHandler(dateCreated)}</p>
                <p>date mod: {dateHandler(dateModified)}</p>

                <Link key={id} to={{pathname:`/mylogs/${id}`}} params={{
                  id,
                  title,
                  log,
                  result,
                  comment,
                  dateCreated,
                  dateModified,
                  active,
                }}>
                  <p>Details</p>
                </Link>  

                <p onClick={(e) => deleteHandler(e)}>×</p>
              </div>
            )
          )}

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    logs: state.log.userLogs
})

const mapDispatchToProps = (dispatch) => ({
    fetchLogsStartAsync: (uid) => dispatch(fetchLogsStartAsync(uid)),
    deleteLog: (obj) => dispatch(deleteLog(obj)),
    sortLogs: (sortBy) => dispatch(sortLogs(sortBy))
})


export default connect(mapStateToProps, mapDispatchToProps)(LogListPage);
