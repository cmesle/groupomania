import logo from '../assets/logo.avif';
import '../styles/header.css'
import Nav from "./Nav"

function Header() {
    return (
        <div>
            <header>
                <div className='top-header'>
                    <img src={logo} className="header-logo" alt="logo" />
                    <h1>Welcome to your social network</h1>
                </div>
                <Nav />
            </header>
        </div>
    )
}

export default Header