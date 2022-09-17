
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import LoginForm from '../../components/LoginForm';
import '../../styles/main.css';

function Login() {
  return (
    <main>
      <h1>
        Connexion
      </h1>
      <Link to='../Signup'>pas encore inscrit ? Créer votre compte</Link>
      <LoginForm />
    </main>
  )
}

export default Login
