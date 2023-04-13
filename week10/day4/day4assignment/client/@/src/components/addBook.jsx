import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddBook() {
    const navigate = useNavigate()

    const[newBook, setNewBook] = useState({
        title: "",
        genre: "",
        publisher: "",
        year: 0,
        imageURL: "",
    })

    const captureInput = (e) => {
        const { name, value } = e.target

        setNewBook((prevNewBook) => ({
            ...prevNewBook,
            [name]: value,
        }))
        
    }

    const addBook = async () => {
        const response = await fetch('http://localhost:8080/api/books', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        })
        console.log(response)
        navigate('/')
    }

    return(
        <>
            <input type="text" placeholder="title" name="title" onChange={captureInput}/>
            <input type="text" placeholder="genre" name="genre" onChange={captureInput}/>
            <input type="text" placeholder="publisher" name="publisher" onChange={captureInput}/>
            <input type="number" placeholder="year" name="year" onChange={captureInput}/>
            <input type="text" placeholder="imageURL" name="imageURL" onChange={captureInput}/>
            <button onClick={addBook}>Add Book</button>
        </>
    )
}

export default AddBook