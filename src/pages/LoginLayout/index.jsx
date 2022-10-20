import { Outlet } from "react-router-dom"

import logo from '../../assets/logo.svg'

import styles from '../../styles/LoginLayout.module.css'
import '../../styles/userForm.css'


function LoginLayout() {
    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt='logo Groupomnia' width='100%' />
            </header >

            <Outlet />
        </>
    )
}

export default LoginLayout