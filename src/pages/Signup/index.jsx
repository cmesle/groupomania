
import { Link } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import '../../styles/main.css';

function Signup() {
    return (
        <main>
            <h1>
                Créer votre compte
            </h1>
            <Link to='/'>déjà inscrit ? Vous connecter</Link>
            <LoginForm />
        </main>
    )
}

export default Signup
