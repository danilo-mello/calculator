import React, { useContext, useEffect } from "react";
import { LogContext } from "../../context/LogProvider";
import { UserContext } from "../../context/UserProvider";
import CheckBox from "../UI/CheckBox";
import SearchBar from "../UI/SearchBar";

const LogListPage = () => {
  const logContext = useContext(LogContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext && logContext.loadingUserLogs(userContext.uid);
  }, [logContext, userContext]);

  return (
    <div className="LogList">
      <div className="w-5/6">
        <div className="Filter">
          <CheckBox
            value="dateCreated"
            labelfor="dateCreated"
            label="Date Created"
          />
          <CheckBox
            value="dateModified"
            labelfor="dateModified"
            label="Date Modified"
          />
          <CheckBox value="title" labelfor="title" label="Title" />
          <CheckBox value="result" labelfor="result" label="Result" />
          <SearchBar />
        </div>
        {logContext.userLogs &&
          logContext.userLogs.map(
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
              <div key={id} className="MyLog">
                <p>date created: {dateCreated}</p>
                <p>title: {title}</p>
                <p>result: {result}</p>
                <p>comment: {comment}</p>
                <p>Edit</p>
                <p>×</p>
                {/* <p>
                  id: {id}, title: {title}, log: {log}, result: {result},
                  comment: {comment}, date created: {dateCreated}, date
                  modified: {dateModified}, active: {active}{" "}
                </p> */}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default LogListPage;
