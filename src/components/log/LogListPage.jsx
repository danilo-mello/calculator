import React, { useContext, useEffect, useState } from "react";
import { LogContext } from "../../context/LogProvider";
import { UserContext } from "../../context/UserProvider";
import CheckBox from "../UI/CheckBox";
import SearchBar from "../UI/SearchBar";
import LogModal from "./LogModal";

const LogListPage = () => {
  const logContext = useContext(LogContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext && logContext.loadingUserLogs(userContext.uid);
  }, [userContext]);

  // useEffect(() => {
  //   userContext && logContext.loadingUserLogs(userContext.uid);
  // }, [logContext, userContext]);

  const [modal, setModal] = useState(false);
  const handleModal = (e) => {
    console.log(e.target.id);
    setModal(true);
  };

  return (
    <div className="LogList relative">
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
              <div key={id} id={id} onClick={handleModal} className="MyLog">
                <p>date created: {dateCreated}</p>
                <p>title: {title}</p>
                <p>result: {result}</p>
                <p>comment: {comment}</p>
                <p>Edit</p>
                <p>×</p>
              </div>
            )
          )}
        {/* {modal ? (
          <LogModal id={logContext.userLogs && logContext.userLogs.id} />
        ) : null} */}
      </div>
    </div>
  );
};

export default LogListPage;
