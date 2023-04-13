import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })

    const handleLoginInputs = (e) => {
        const { name, value } = e.target
        setCredentials((prevSetCredentials) => ({
            ...prevSetCredentials,
            [name]: value
        }))
    }

    const handleLogin = async () => {
        const response = await fetch('http://localhost:8080/auth/login', {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        console.log(response)

        navigate('/')
    }
    

    return(
        <>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" onChange={handleLoginInputs}/>
            <input type="text" placeholder="password" name="password" onChange={handleLoginInputs}/>
            <button onClick={handleLogin}>Login</button>
            <div><NavLink to="/signup">Sign Up</NavLink></div>
        </>
    )
}

export default Login