import BasicCalcHooks from './calc-hooks/BasicCalcHooks';
import SaveLog from './log/SaveLog';
// import BasicCalcRedux from './calc-redux/BasicCalcRedux';
import SignIn from './auth/SignIn'
import { UserContext } from "../context/UserProvider";
import {auth} from "../firebase";
import React, { useContext } from "react";


function Application() {

  const user = useContext(UserContext);

  return (
      user ? 
      
        <>
            {/* <h1>WITH HOOKS</h1> */}
            <BasicCalcHooks />
            {/* <h1>WITH REDUX</h1> */}
            {/* <BasicCalcRedux /> */}
            <hr />
            <div> Hi {user.displayName} <button onClick = {() => {auth.signOut()}}>Sign out</button> </div>
            <SaveLog />

        </>

      :
      
        <>
            {/* <h1>WITH HOOKS</h1> */}
            <BasicCalcHooks />
            {/* <h1>WITH REDUX</h1> */}
            {/* <BasicCalcRedux /> */}
            <hr />
            <SignIn />
        </>
  );
}

export default Application;
