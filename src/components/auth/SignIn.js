import React from "react";
import { signInWithGoogle } from "../../firebase";
import Button from "../UI/Button";

const SignIn = () => {
  return (
    <>
      <Button
        id="signin"
        onClick={() => {
          signInWithGoogle();
        }}
        button="Sign in with Google"
      />
      {/* <button onClick={() => {signInWithGoogle();}}>
        Sign in with Google
      </button> */}
    </>
  );
};

export default SignIn;
