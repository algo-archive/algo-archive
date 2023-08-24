import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButtons = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (isAuthenticated) {
    return (
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    );
  } else {
    return <button onClick={() => loginWithRedirect()}>Log In</button>
    // (
    //   <div>
    //   <img src="">
    // <button onClick={() => loginWithRedirect()}>Log In</button>
    // </div>
    // );
  }
};

export default AuthenticationButtons;