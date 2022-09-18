import colors from "../../utils/style/colors"
import logo from '../../assets/logo.svg'
import styled from "styled-components"
import { Outlet } from "react-router-dom"

const StyledHeader = styled.header`
padding: 100px;
`

function BeforeStarting() {
    return (
        <>
            <StyledHeader>
                <h1 style={{ textAlign: 'center', fontSize: '25px', marginBottom: '25px' }}>Restons <span style={{ color: colors.primary }}>group</span>és,
                    le facebook de </h1>
                <div style={{ display: 'flex', placeItems: 'center', height: '80px', overflow: 'hidden' }}>
                    <img src={logo} alt='logo Groupomnia' style={{ display: 'block', margin: '0 auto 0 auto' }} width='50%' />
                </div>
            </StyledHeader >

            <Outlet />
        </>
    )
}

export default BeforeStarting