import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup() {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handelSignupInput = (e) => {
        const { name, value } = e.target
        setCredentials((prevSetCredentials) => ({
            ...prevSetCredentials,
            [name]: value
        }))
    }

    const handelSignup = async () => {
        const response = await fetch('http://localhost:8080/auth/signup', {
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
            <h1>Signup</h1>
            <input type="text" placeholder="username" name="username" onChange={handelSignupInput} />
            <input type="text" placeholder="password" name="password" onChange={handelSignupInput} />
            <button onClick={handelSignup}>Signup</button>
            <div><NavLink to="/login">Log In</NavLink></div>
        </>
    )
}

export default Signup