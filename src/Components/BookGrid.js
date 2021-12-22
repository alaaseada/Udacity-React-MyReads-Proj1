import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BookGrid(props) {
    return (
        <ol className="books-grid">
            {props.books.map((book) => {
                return <li key={book.id}><Book book={book} onBookChange={(newShelf) => props.onBookinGridChange({ book }, newShelf)} /></li>
            })}
        </ol>
    )
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onBookinGridChange: PropTypes.func.isRequired
}

export default BookGrid;