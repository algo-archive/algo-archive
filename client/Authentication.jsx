import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButtons =  () => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !window.location.search.includes('code=')) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect, isLoading]);

  if (isAuthenticated) {
    return (
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    );
  } else {
    return null;
  }
};

export default AuthenticationButtons;