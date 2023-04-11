import { Component } from "react";
import Books from "./books"
import Header from './header'

class App extends Component {

  constructor() {
    super(),
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(result => {
      this.setState({
        books: result
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Books books={this.state.books}/>
      </div>
    )
  }
}

export default App