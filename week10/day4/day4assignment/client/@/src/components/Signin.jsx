import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function LogIn() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async () => {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const result = await response.json()
        if(result.success) {
            localStorage.setItem('jwtToken', result.token)
            navigate('/')
        }else { 
            setMessage(result.message) 
        }
    }

    return (
        <>
          <h1>Login</h1>
          <input type = "text" name = "username" placeholder = "Username" onChange = {handleChange} />
          <input type = "password" name = "password" placeholder = "password" onChange = {handleChange} />
          <button onClick = {handleLogin}>Login</button>
          <h1>{message}</h1>
        </>
      
    )
}

export default LogIn

