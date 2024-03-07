import React, { useState } from "react";
import GoogleLogin from "react-google-login";

const GoogleLoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const responseGoogle = (response) => {
    console.log(response.profileObj); // Log user data for now
    setIsLoggedIn(true);
    setUserData(response.profileObj);
  };

  return (
    <div>
      {!isLoggedIn && (
        <GoogleLogin
          clientId="YOUR_CLIENT_ID" // Replace with your Google client ID
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      )}
      {isLoggedIn && (
        <div>
          Welcome, {userData.name}! You are logged in.
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default GoogleLoginComponent;
