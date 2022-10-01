import '../styles/nav.css'
import { NavLink } from 'react-router-dom'

// import { useContext } from 'react'
// import { PTUContext } from '../utils/context'


function Nav() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        onClick={() => {
                            localStorage.setItem('PTU', '0')
                        }
                        }
                        to='../newpost' >
                        nouvelle publication</NavLink>
                </li>
                <li>
                    <NavLink to='../myposts'>mes publications</NavLink>
                </li>
                <li>
                    <NavLink to='../'>déconnexion</NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default Nav