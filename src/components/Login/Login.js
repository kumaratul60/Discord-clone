import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg"
          alt="logo"
        />
      </div>

      <Button color="primary" variant="contained" onClick={signIn}>
        Sign In with Google
      </Button>
    </div>
  );
}

export default Login;
