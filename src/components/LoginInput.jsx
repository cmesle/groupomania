import { useState } from 'react'
import '../styles/form.css'

function LoginInput(prop) {
    const [userInput, setUserInput] = useState('')
    return (
        <div>
            <label>{prop.name} :
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
            </label>
        </div>
    )
}

export default LoginInput