import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {

    const auth =
        // { 'token': true }
        localStorage.getItem('token')
    // console.log(auth)
    return (
        auth ? <Outlet /> : <Navigate to='/' replace />
    )
}

export default PrivateRoutes