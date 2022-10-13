import logo from '../assets/logo.avif';
import '../styles/header.css'
import Nav from "./Nav"


function Header({ userPseudo }) {

    return (
        <>
            <header>
                <div className='top-header'>
                    <img src={logo} className="header-logo" alt="logo" />
                    <h1>Welcome to your social network, {userPseudo}</h1>
                </div>
                <Nav />
            </header>
        </>
    )
}

export default Header