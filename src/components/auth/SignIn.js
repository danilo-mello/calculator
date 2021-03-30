import React, {useState} from "react";
import { signInWithGoogle, auth } from "../../firebase";

const SignIn = () => {

    const [error, setError] = useState(null);

  return (
    <div >
      <div>
        {error !== null && <div>{error}</div>}

        <button onClick={() => {signInWithGoogle();}}>
          Sign in with Google
        </button>

      </div>
    </div>
  );
};

export default SignIn;