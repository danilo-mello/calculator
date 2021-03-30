import BasicCalcHooks from './calc-hooks/BasicCalcHooks';
import BasicCalcRedux from './calc-redux/BasicCalcRedux';
import SignIn from './auth/SignIn'
import { Router } from "@reach/router";
import { UserContext } from "../context/UserProvider";
import {auth} from "../firebase";
import React, { useContext } from "react";


function Application() {

  const user = useContext(UserContext);

  return (
      user ? 
      
        <>
            <BasicCalcHooks />
            <BasicCalcRedux />
            <hr />
            <div> Hi {user.displayName} <button onClick = {() => {auth.signOut()}}>Sign out</button> </div>

        </>

      :
      
        <>
            <BasicCalcHooks />
            <BasicCalcRedux />
            <hr />
            <SignIn />
        </>
  );
}

export default Application;
