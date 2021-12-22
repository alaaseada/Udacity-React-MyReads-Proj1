import React, { Component } from "react";
import BookGrid from "./BookGrid";
import * as BooksAPI from "../BooksAPI"
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";


class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: "",
            searchResults: [],
            searchDone: false,
            myReadBooks: this.props.books
        }
    }

    updateSearchResults = (newSearchKey) => {
        this.setState(() => ({ searchKey: newSearchKey, searchDone: true }))
        if (newSearchKey) {
            BooksAPI.search(newSearchKey).then((res) => {
                if (res.error !== "empty query") {
                    res = this.handleBookshelfDisplay(res)
                    this.setState({ searchResults: res })
                } else {
                    this.setState({ searchResults: [] })
                }
            })
        } else {
            this.setState({ searchResults: [] })
        }
    }

    handleBookshelfDisplay = (res) => {
        return res.map(book =>
            this.state.myReadBooks.find(book_on_shelf => book_on_shelf.id === book.id) || book)
    }

    updateBooks = (book, shelf) => {
        BooksAPI.update(book.book, shelf).then(() => {
            BooksAPI.getAll().then((res) => {
                this.setState(() => ({
                    myReadBooks: res
                }))
                this.updateSearchResults(this.state.searchKey);
                this.props.onBookInSearchChange(book, shelf)
            })
        })
    }

    render() {
        const searchResults = this.state.searchResults
        const emptyResult =
            (this.state.searchDone &&
                (searchResults.error === "empty query" || searchResults.length === 0) &&
                this.state.searchKey !== "");

        return (
            <div className="search-books">
                <SearchBar searchKey={this.state.searchKey} updateSearchKey={(newVal) => this.updateSearchResults(newVal)} />
                <div className="search-books-results">
                    {emptyResult ?
                        <div className="search-result-comment">There are no books match your search keyword!</div>
                        : <BookGrid books={this.state.searchResults} onBookinGridChange={(book, newShelf) => this.updateBooks(book, newShelf)} />
                    }
                </div>
            </div>
        )
    }
}

BookSearch.propTypes = {
    books: PropTypes.array.isRequired,
    onBookInSearchChange: PropTypes.func.isRequired
}

export default BookSearch;