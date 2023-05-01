import { useState } from 'react'

function LogIn() {
    const [user, setUser] = useState({})

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.targe.value
        })
    }

    const handleLogin = async () => {
        const response = await fetch('http://llocalhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const result = await response.json()
        if(result.success) {
            localStorage.setItem('jwtToken', result.token)
        }else { message: "failed" }
    }

    return (
        <>
          <h1>Login</h1>
          <input type = "text" name = "username" placeholder = "Username" onChange = {handleChange} />
          <input type = "password" name = "password" placeholder = "password" onChange = {handleChange} />
          <button onClick = {handleLogin}>Login</button>
        </>
      
    )
}

export default LogIn

