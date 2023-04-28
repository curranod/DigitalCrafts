import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function Update() {
    const {_id, title, genre, publisher, year} = useParams()
    const navigate = useNavigate()

    const [updateBook, setUpdateBook] = useState({
        bookTitle: title,
        bookGenre: genre,
        bookPublisher: publisher,
        bookYear: year,
    })

    const handleInput = (e) => {
        setUpdateBook({
            ...updateBook,
            [e.target.name]: e.target.value
        })
    }

    const updateButton = async (_id) => {
        const response = await fetch(`http://localhost:8080/api/books/${_id}`, {
        method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, 
        body: JSON.stringify(updateBook)
    })
    navigate('/')
    }

    return (
        <>
        <input type="text" name='bookTitle' placeholder={title} onChange={handleInput}/>
        <input type="text" name='bookGenre' placeholder={genre} onChange={handleInput}/>
        <input type="text" name='bookPublisher' placeholder={publisher} onChange={handleInput} />
        <input type="text" name='bookYear' placeholder={year} onChange={handleInput}/>
        <button onClick={() => updateButton(_id)}>Update</button>
        <Link to="/">
            <button>Return Home</button>
        </Link>
        </>
    )
}

export default Update