import React from "react";
import BookshelfList from "./BookshelfList";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MyReads(props) {
    const books = props.books;
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookshelfList books={books} onBookShelfListChange={(book, newShelf) => props.onMyReadsChange(book, newShelf)} />
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

MyReads.propTypes = {
    books: PropTypes.array.isRequired,
    onMyReadsChange: PropTypes.func.isRequired
}

export default MyReads;