
import React from 'react';
import { Link } from 'react-router-dom';

import UserForm from '../../components/UserForm';
import '../../styles/main.css';


const baseURL = "http://localhost:3001/api/auth/login"
const navigateTo = ('../gallery')
const buttonName = "connexion"

function Login() {
  return (
    <main>
      <h1>
        <Link to='/signup'>pas encore inscrit ? Créer votre compte</Link>
      </h1>
      <UserForm baseURL={baseURL} buttonName={buttonName} navigateTo={navigateTo} />
    </main >
  )
}

export default Login
