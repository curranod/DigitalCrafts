import { connect } from "react-redux"
import { useState, useEffect } from 'react'
import AddBook from './components/addBook'
// import * as actionCreators from "./store/creators/actionCreators";


function App(props) {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/api/books')
    const result = await response.json()
    setBooks(result)
  }

  const handleDeleteBook = async (bookid) => {
    const response = await fetch(`http://localhost:8080/api/books/${bookid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  const handleUpdateBook = async () => {
    const response = await fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  };

  const bookItems = books.map((book) => {
    return (
      <li key = {book.id}>
        <h1>{book.bookTitle}</h1>
        <b>genre: {book.bookGenre}</b>
        <br></br>
        <img src = {book.bookImageURL} />
        <button onClick={() => props.addToCart(book)}>add2cart</button>
        <button onClick={() => handleDeleteBook(book.id)}>Delete Book</button>
        <button onClick={handleUpdateBook}>Update Book</button>
      </li>
    )
  })

  return (
    <>
    <h1>Books</h1>
    <AddBook />
      <ul>{bookItems}</ul>
      <h4>Total Number of Items in Cart: {props.cartCount}</h4>
    </>
  )  
}

const mapStateToProps = (state) => {
  return {
    cartCount: state.cart.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (book) => dispatch({type: 'BOOKS', payload: book})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);