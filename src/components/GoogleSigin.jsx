// GoogleSignIn.jsx
import React from 'react';
import { GoogleLoginButton } from '@react-oauth/google';

const GoogleSignIn = ({ onSignIn }) => {
  const handleSignIn = (user) => {
    // Handle the signed-in user data
    onSignIn(user);
  };

  return (
    <div>
      <GoogleLoginButton onSuccess={handleSignIn} />
    </div>
  );
};

export default GoogleSignIn;

// Navbar.jsx