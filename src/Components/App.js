import React from 'react';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import MyReads from './MyReads';
import { Route } from "react-router-dom";
import BookSearch from './BookSearch';


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book.book, shelf).then(() => {
      BooksAPI.getAll().then((res) => {
        this.setState(() => ({
          books: res
        }))
      })
    })
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/">
          <MyReads books={this.state.books} onMyReadsChange={(book, newShelf) => this.updateBooks(book, newShelf)} />
        </Route>
        <Route path="/search">
          <BookSearch books={this.state.books} onBookInSearchChange={(book, newShelf) => this.updateBooks(book, newShelf)} />
        </Route>
      </div>
    )
  }
}

export default BooksApp;