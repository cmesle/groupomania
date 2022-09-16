import styled from "styled-components"
import colors from "../utils/style/colors"
// const text = 'connexion'

const StyledButton = styled.button`
    border-radius: 5%;
    &:hover {    
        background-color: ${colors.primary}
    } 
`

function Button(prop) {
    return <StyledButton>{prop.name}</StyledButton>
}

export default Button