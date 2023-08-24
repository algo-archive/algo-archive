import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButtons =  () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  console.log(isAuthenticated)
  if (isAuthenticated) {
    return (
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    );
  } else {
    //  loginWithRedirect({
    //   authorizationParams: {
    //     redirect_uri: 'http://localhost:8080/'
    //   }})
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