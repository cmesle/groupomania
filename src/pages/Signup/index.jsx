
import { Link } from 'react-router-dom';

import UserForm from '../../components/UserForm';
import '../../styles/main.css';

const baseURL = "http://localhost:3001/api/auth/signup"
const navigate = '/'
const buttonName = "créer mon compte"

function Signup() {
    return (
        <main>
            <h1>
                Créer votre compte
            </h1>
            <Link to='/'>déjà inscrit ? Vous connecter</Link>
            <UserForm baseURL={baseURL} buttonName={buttonName} navigateTo={navigate} />
        </main>
    )
}

export default Signup
