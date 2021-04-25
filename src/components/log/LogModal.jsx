import React, { useContext } from "react";
import { LogContext } from "../../context/LogProvider";
import { UserContext } from "../../context/UserProvider";

const LogModal = ({ id }) => {
  const logContext = useContext(LogContext);
  // const userContext = useContext(UserContext);

  // useEffect(() => {
  // userContext && logContext.loadingUserLogs(userContext.uid);
  // }, []);

  const logModal = logContext.userLogs.filter((log) => log.id === id);

  return (
    <div className="LogList z-50 absolute top-0 left-0 bg-black bg-opacity-10">
      <div className="w-5/6">
        <div className="border">
          <p>
            {logModal[0].id}
            {/* id: {id}, title: {title}, log: {log}, result: {result}, comment:{" "}
            {comment}, date created: {dateCreated}, date modified:{" "}
            {dateModified}, active: {active}{" "} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogModal;
