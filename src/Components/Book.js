import React from "react";
import BookTop from "./BookTop";
import PropTypes from 'prop-types';


function Book(props) {
    const book = props.book
    return (
        <div className="book">
            <BookTop book={book} onBookTopChange={(newShelf) => props.onBookChange(newShelf)} />
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onBookChange: PropTypes.func.isRequired
}

export default Book;