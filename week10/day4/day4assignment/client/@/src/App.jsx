import { useState, useEffect } from 'react'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/api/books')
    const result = await response.json()
    setBooks(result)
  }

  const bookItems = books.map(book => {
    return (
      <li key = {book._id}>
        <h1>{book.bookTitle}</h1>
        <b>genre: {book.bookGenre}</b>
        <br></br>
        <img src = {book.bookImageURL} />
      </li>
    )
  })

  return (
    <>
    <h1>Books</h1>
      <ul>{bookItems}</ul>
    </>
  )


}

export default App
