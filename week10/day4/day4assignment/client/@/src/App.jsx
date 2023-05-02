import { connect } from "react-redux"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import AddPage from "./components/AddPage";
// import * as actionCreators from "./store/creators/actionCreators";


function App(props) {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks(localStorage.getItem("token"))
  }, [])

  const fetchBooks = async (token) => {
    const response = await fetch('http://localhost:8080/api/books', {
      method: 'GET',
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
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

  

  const bookItems = books.map((book) => {
    return (
      <li key = {book._id}>
        <h1>{book.bookTitle}</h1>
        <b>genre: {book.bookGenre}</b>
        <br></br> 
        <img src = {book.bookImageURL} />
        <button onClick={() => props.addToCart(book)}>add2cart</button>
        <button onClick={() => handleDeleteBook(book._id)}>Delete Book</button>
        <Link to={`/update-book/${book._id}/${book.bookTitle}/${book.bookGenre}/${book.bookPublisher}/${book.bookYear}`}>
          <button >Update</button>
        </Link>
        
      </li>
    )
  })

  return (
    <>
    <h1>Books</h1>
      <AddPage/>
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