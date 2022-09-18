import '../styles/nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='../newpost'>nouvelle publication</Link>
                </li>
                <li>
                    <Link to='../myposts'>mes publications</Link>
                </li>
                <li>
                    <Link to='../'>déconnexion</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Nav