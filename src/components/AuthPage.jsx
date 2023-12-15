import React from 'react';
import GoogleSignIn from '../components/GoogleSigin.jsx';

const AuthPage = ({ onSignIn }) => {
  return (
    <div>
      <h1>Welcome to the Authentication Page</h1>
      <p>Sign in with Google to continue.</p>
      <GoogleSignIn onSignIn={onSignIn} />
    </div>
  );
};

export default AuthPage;
