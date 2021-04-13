import BasicCalcHooks from "./calc-hooks/BasicCalcHooks";
import SignIn from "./auth/SignIn";
import { UserContext } from "../context/UserProvider";
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
      <BasicCalcHooks />
    </>
  ) : (
    <div className="h-full w-full flex items-center justify-center border-2">
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
