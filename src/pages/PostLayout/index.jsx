import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Header from "../../components/Header";
import React from "react";

function PostLayout() {
    localStorage.setItem('PTU', '0')
    const userId = localStorage.getItem('user')
    /* getting the user's pseudo */
    const [usersList, setUsersList] = useState()
    const [userPseudo, setUserPseudo] = useState()
    const [userRole, setUserRole] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/api/auth/user')
            .then(res => {
                setUsersList(res.data)
                setUserPseudo(res.data.filter(users => users._id === userId)[0].pseudo)
                setUserRole(res.data.filter(users => users._id === userId)[0].role)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header userPseudo={userPseudo} />
            <Outlet context={[usersList, setUsersList, userRole, setUserRole]} />
        </>
    )

}

export default PostLayout