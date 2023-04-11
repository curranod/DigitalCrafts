import { Component } from "react";

class Books extends Component {
    render() {
        const books = this.props.books
        const booksMapped = books.map((book) => {
            return (
                <div key={book.index}>
                    <div>{book.title}</div>
                    <p>{book.author}</p>
                    <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} />
                </div>
            )
        })
        return(
            <ul>{booksMapped}</ul>
        )
    }
}

export default Books