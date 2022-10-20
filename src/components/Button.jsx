import styled from "styled-components"
import '../styles/App.css'

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--secondary);
    color: var(--tertiary);

    &:hover {    
        color: white;
        font-weight: bolder;
        background-color: var(--primary);
    } 
`

function Button(props) {
    return <StyledButton type={props.type} navigateTo={props.navigateTo} onClick={props.action}>
        <img src={props.icon} alt='' />
        <span>{props.name}</span>
    </StyledButton>
}

export default Button