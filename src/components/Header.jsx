import logo from '../assets/logo.svg';
import '../styles/header.css'
import styles from '../styles/PostLayout.module.css'
import Nav from "./Nav"


function Header({ userPseudo, userRole }) {

    return (
        <>
            <header className={styles.header}>
                <div className='top-header'>
                    <img src={logo} className="header__logo" alt="logo" />
                    <div>Bienvenue, {userPseudo}</div>
                </div>
                <Nav userRole={userRole}/>
            </header>
        </>
    )
}

export default Header