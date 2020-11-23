import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

//AuthProviderWithHistory is Auth0Provider with access to the application session history
//Auth0Provider component manages the authentication state of users
const Auth0ProviderWithHistory = ({ children }) => {
  //connect react to Auth0
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  //access sesssion history
  const history = useHistory();

  //redirects users from login page to take users back to the route they intended to access before authentication 
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;