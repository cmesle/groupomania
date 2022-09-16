
import React from 'react';

import LoginForm from '../../components/LoginForm';
import '../../styles/App.css';

function Login() {
  return (
    <React.Fragment>
      <div className="App">
        Connexion
      </div>
      <LoginForm />
    </React.Fragment>
  )
}

export default Login
