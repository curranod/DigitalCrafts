import { useState, useEffect } from "react";

function AddBook() {

    const [bookInfo, setBookInfo] = useState({
        bookTitle: "",
        bookGenre: "",
        bookYear: "",
        bookImageUrl: ""
    })

    const handleInput = (e) => {
        setBookInfo ({
            ...bookInfo,
            [e.target.name]: e.target.value
        })
    }

    const sendState = async () => {
        await fetch ('http://localhost:8080/api/add-book',
        {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(bookInfo)
        }) 
        
    }

    return (
        <>
        <h1>
            Hello
        </h1>
        <input type="text" placeholder="title" name="bookTitle" onChange = {handleInput} />
        <input type="text" placeholder="genre" name="bookGenre" onChange = {handleInput} />
        <input type="text" placeholder="Publisher" name="bookPublisher" onChange = {handleInput} />
        <input type="text" placeholder="Year" name="bookYear" onChange = {handleInput} />
        <input type="text" placeholder="IMageUrl" name="bookImageUrl" onChange = {handleInput} />
        <button onClick = {sendState}>submit</button>
        </>
    )
}

export default AddBook