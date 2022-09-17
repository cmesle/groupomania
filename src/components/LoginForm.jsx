import LoginInput from "./LoginInput";
import Button from './Button';
import '../styles/form.css'

function LoginForm() {
    return (
        <form>
            <LoginInput name='email professionnel ' />
            <LoginInput name='mot de passe ' />
            <p>au moins 8 caractères, dont 1 minuscule, 1 majuscule, 1 chiffre</p>
            <Button name='connexion' />
        </form>
    )
}

export default LoginForm