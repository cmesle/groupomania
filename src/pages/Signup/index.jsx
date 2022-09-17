
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import LoginForm from '../../components/LoginForm';
import '../../styles/main.css';

function Signup() {
    return (
        <main>
            <h1>
                Créer votre compte
            </h1>
            <Link to='../Login'>déjà inscrit ? Vous connecter</Link>
            <LoginForm />
        </main>
    )
}

export default Signup
