import BasicCalcHooks from "./calc-hooks/BasicCalcHooks";
import SaveLog from "./log/SaveLog";
import LogListPage from "./log/LogListPage";
// import BasicCalcRedux from './calc-redux/BasicCalcRedux';
import SignIn from "./auth/SignIn";
import { UserContext } from "../context/UserProvider";
import { auth } from "../firebase";
import React, { useContext } from "react";

function Application() {
  const user = useContext(UserContext);

  const style = {
    text: {
      webkitTextStroke: "1px #FFF",
    },
  };

  return user ? (
    <>
      {/* <h1>WITH HOOKS</h1> */}
      <BasicCalcHooks />
      {/* <h1>WITH REDUX</h1> */}
      {/* <BasicCalcRedux /> */}
      {/* <hr /> */}
      {/* <div>
        {" "}
        Hi {user.displayName}{" "}
        <button
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign out
        </button>{" "}
      </div> */}
      {/* <SaveLog /> */}
      {/* <LogListPage /> */}
    </>
  ) : (
    <div className="h-full w-full flex items-center justify-center border-2">
      {/* <NavBar /> */}
      {/* <h1>WITH HOOKS</h1> */}
      {/* <BasicCalcHooks /> */}
      {/* <h1>WITH REDUX</h1> */}
      {/* <BasicCalcRedux /> */}
      <div className="w-5/6 md:w-2/5 text-center">
        <h1 className="text-transparent" style={style.text}>
          Calc Log
        </h1>
        <p className="my-8">
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
