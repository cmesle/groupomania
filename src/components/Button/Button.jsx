
import './Button.css'
// import styled from "styled-components"

// const Button = styled.button`
// color: green;
// `
function Button(props) {
    return (
        <button type={props.type} disabled={props.disabled} onClick={props.action}>
            <img src={props.icon} alt='' />
            <span>{props.name}</span>
        </button>
    )
}

export default Button