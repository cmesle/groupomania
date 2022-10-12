import styled from "styled-components"
import colors from "../utils/style/colors"

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

function Button(props) {
    return <StyledButton type={props.type} navigateTo={props.navigateTo} onClick={props.action}>{props.name}</StyledButton>
}

export default Button