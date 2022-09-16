import '../styles/nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='../pages/NewPost'>nouvelle publication</Link>
                </li>
                <li>
                    <Link to='../pages/MyPosts'>mes publications</Link>
                </li>
                <li>
                    <Link to='../pages/Login'>déconnexion</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Nav