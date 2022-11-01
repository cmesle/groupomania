import logo from '../../assets/logo.svg';
import './header.css'
// import '../styles/PostLayout.css'
import Nav from "../Nav"


function Header({ userPseudo, userRole }) {

    return (
        <>
            <header className='post-layout__header'>
                <div className='top-header'>
                    <div className="header__logo">
                       <img src={logo} alt="logo" />
                    </div>
                    <div className='welcome'>Bienvenue, {userPseudo}</div>
                </div>
                <Nav userRole={userRole}/>
            </header>
        </>
    )
}

export default Header