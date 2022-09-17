import styled from "styled-components"
import colors from "../utils/style/colors"
// const text = 'connexion'

const StyledButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 15px;
    background-color: ${colors.secondary};

    &:hover {    
        color: white;
        font-weight: bolder;
        background-color: ${colors.primary};
    } 
`

function Button(prop) {
    return <StyledButton>{prop.name}</StyledButton>
}

export default Button