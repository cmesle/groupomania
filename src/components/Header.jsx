import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/logo.avif';
import '../styles/header.css'
import Nav from "./Nav"


function Header(props) {
    /* getting the user's pseudo */
    // const [usersList, setUsersList] = useState()

    // useEffect(() => {
    //     // fetch('http://localhost:3001/api/auth/user')
    //     //     .then(res => res.json())
    //     //     .then(data => setUsersList(data))
    //     //     .catch(err => console.log(err))

    //     axios.get('http://localhost:3001/api/auth/user')
    //         .then(res =>
    //             setUsersList(res.data))
    // }, [])

    // console.log('layout', usersList)
    return (
        <>
            <header>
                <div className='top-header'>
                    <img src={logo} className="header-logo" alt="logo" />
                    <h1>Welcome to your social network, {props.userPseudo}</h1>
                </div>
                <Nav />
            </header>
        </>
    )
}

export default Header