import { useState, useEffect, useContext } from 'react'
import { NavLink, useOutletContext } from 'react-router-dom'
import axios from 'axios'

import { FilterContext } from '../utils/context'

import '../styles/nav.css'
import iconNew from '../assets/icon-nav/icon-new.avif'
import iconMy from '../assets/icon-nav/icon-my.avif'
import iconAll from '../assets/icon-nav/icon-all.avif'
import iconOut from '../assets/icon-nav/icon-out.avif'




function Nav({userRole}) {


    /*---------------------------------------------------------------- GETTING USER'S ROLE */
    // const userId = localStorage.getItem('user')

    // const userRole = useOutletContext()
    // console.log(userRole)
    // const [userRole, setUserRole] = useState()
    // useEffect(() => {
    //     axios.get(`http://localhost:3001/api/auth/user/${userId}`)
    //         .then(res => { setUserRole(res.data.role) })
    // })

    /*------------------------------------------------------------------- NAV LINKS LOGICS */
    const handleNewClick = () => { localStorage.setItem('PTU', '0') }

    const { toggleFilter, filter } = useContext(FilterContext)
    const handleFilterClick = () => { toggleFilter() }

    const handleLogoutClick = () => {
        localStorage.clear()
    }

    return (
        <nav>
            <ul>
                {userRole !== 'admin' &&
                    <>
                        <li>
                            <NavLink
                                to='newpost'
                                onClick={handleNewClick}>
                                <img src={iconNew} alt="icone navigation : nouvelle publication" />
                                <span>nouvelle publication</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='gallery'
                                onClick={handleFilterClick}>
                                    {filter === 'allPosts' ? 
                                    <img src={iconMy} alt='icone navigation : mes publications'/> : 
                                    <img src={iconAll} alt='icone navigation : toutes les publications'/> 
                                    }
                                <span>
                                    {filter === 'allPosts' ? 'mes publications' : 'toutes les publications'}
                                </span>
                            </NavLink>
                        </li>
                    </>
                }
                <li>
                    <NavLink to='/' onClick={handleLogoutClick}>
                        <img src={iconOut} alt="" />
                        <span>déconnexion</span>
                    </NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default Nav