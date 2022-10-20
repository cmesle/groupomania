import logo from '../assets/logo.svg';
import '../styles/header.css'
import styles from '../styles/PostLayout.module.css'
import Nav from "./Nav"


function Header({ userPseudo }) {

    return (
        <>
            <header className={styles.header}>
                <div className='top-header'>
                    <img src={logo} className="header-logo" alt="logo" />
                    <div>Bienvenue, {userPseudo}</div>
                </div>
                <Nav />
            </header>
        </>
    )
}

export default Header