
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import UserForm from '../../components/UserForm';
import '../../styles/main.css';

const baseURL = "http://localhost:3001/api/auth/login"
const navigate = ('/gallery')
const buttonName = "connexion"

function Login() {
  return (
    <main>
      <h1>
        Connexion
      </h1>
      <Link to='/signup'>pas encore inscrit ? Créer votre compte</Link>
      <UserForm baseURL={baseURL} buttonName={buttonName} navigateTo={navigate} />
    </main >
  )
}

export default Login
