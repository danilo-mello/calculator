import BasicCalcHooks from "./calc-hooks/BasicCalcHooks";
import SaveLog from "./log/SaveLog";
import LogListPage from "./log/LogListPage";
// import BasicCalcRedux from './calc-redux/BasicCalcRedux';
import SignIn from "./auth/SignIn";
import { UserContext } from "../context/UserProvider";
import { auth } from "../firebase";
import React, { useContext } from "react";
import NavBar from "./UI/NavBar";

function Application() {
  const user = useContext(UserContext);

  const style = {
    text: {
      // color: "rgba(255, 255, 255, 0)",
      textShadow:
        "-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF",
    },
  };

  return user ? (
    <>
      {/* <h1>WITH HOOKS</h1> */}
      <BasicCalcHooks />
      {/* <h1>WITH REDUX</h1> */}
      {/* <BasicCalcRedux /> */}
      <hr />
      <div>
        {" "}
        Hi {user.displayName}{" "}
        <button
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign out
        </button>{" "}
      </div>
      <SaveLog />
      <LogListPage />
    </>
  ) : (
    <div className="h-full w-full flex items-center justify-center border-2">
      {/* <NavBar /> */}
      {/* <h1>WITH HOOKS</h1> */}
      {/* <BasicCalcHooks /> */}
      {/* <h1>WITH REDUX</h1> */}
      {/* <BasicCalcRedux /> */}
      <div className="w-1/3 text-center border">
        <h1 className="text-gray-800" style={style.text}>
          Calc Log
        </h1>
        <p className="my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          temporibus. Inventore fugiat praesentium eaque, minima officia rerum
          quia maxime reiciendis?
        </p>
        <SignIn />
      </div>
    </div>
  );
}

export default Application;
