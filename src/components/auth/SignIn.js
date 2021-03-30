import React from "react";
import { signInWithGoogle } from "../../firebase";

const SignIn = () => {


  return (
    <div >
      <button onClick={() => {signInWithGoogle();}}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;