import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FilterContext } from '../utils/context'

import '../styles/nav.css'

function Nav() {

    const handleNewClick = () => { localStorage.setItem('PTU', '0') }

    const { toggleFilter, filter } = useContext(FilterContext)
    const handleFilterClick = () => { toggleFilter() }

    const handleLogout = () => {
        localStorage.clear()
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to='../newpost'
                        onClick={handleNewClick}>
                        nouvelle publication
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='../gallery'
                        onClick={handleFilterClick}>
                        {filter === 'allPosts' ? 'mes publications' : 'toutes les publications'}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='../' onClick={handleLogout}>déconnexion</NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default Nav