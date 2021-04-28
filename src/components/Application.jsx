
import React, { useContext } from "react";

import BasicCalc from "./basic-calc/BasicCalc";
import SignIn from "./auth/SignIn";
import { UserContext } from "../context/UserProvider";

function Application({ fetchLogsStartAsync }) {
  const user = useContext(UserContext);

  const style = {
    text: {
      WebkitTextStroke: "1px #FFF",
    },
  };

  return user ? (
    <>
      <BasicCalc />
    </>
  ) : (
    <div className="h-full w-full flex items-center justify-center border-2">
      <div className="w-5/6 md:w-2/5 text-center">
        <h1 className="text-transparent" style={style.text}>
          Calc Log
        </h1>
        <p className="my-8">
          CalcLog is a calculator app that allows you to save your calculation logs with a title and comments.
          They'll be stored in the cloud and can be checked anytime on any device!
          Sign in with a Google Account to start.
        </p>
        
        <SignIn />
        <p className="my-8"> © 2021 CalcLog by <a target="_blank" rel="noreferrer" href="http://danilomello.io">danilo</a> and <a target="_blank" rel="noreferrer" href="http://ayumitanaka.net">ayumi</a>.  All rights reserved. </p>
      </div>
      
    </div>
  );
}

export default Application;
