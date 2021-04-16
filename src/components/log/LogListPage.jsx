import React, { useContext, useEffect } from "react";
import { LogContext } from "../../context/LogProvider";
import { UserContext } from "../../context/UserProvider";

const LogListPage = () => {
  const logContext = useContext(LogContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext && logContext.loadingUserLogs(userContext.uid);
  }, [logContext, userContext]);

  return (
    <div className="LogList">
      <div className="w-5/6 border">
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
