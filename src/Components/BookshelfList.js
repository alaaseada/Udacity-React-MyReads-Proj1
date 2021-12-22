import React from "react";
import BookGrid from "./BookGrid";
import PropTypes from "prop-types";

function BookshelfList(props) {
    const shelfs = { "currentlyReading": "Currently Reading", "wantToRead": "Want to Read", "read": "Read" }
    return (
        <div className="list-books-content">
            <div>
                {Object.entries(shelfs).map(([k, v]) => {
                    return (
                        <div className="bookshelf" key={k}>
                            <h2 className="bookshelf-title">{v}</h2>
                            <div className="bookshelf-books">
                                <BookGrid books={props.books.filter((book) => (book.shelf === k))} onBookinGridChange={(book, newShelf) => props.onBookShelfListChange(book, newShelf)} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

BookshelfList.propTypes = {
    books: PropTypes.array.isRequired,
    onBookShelfListChange: PropTypes.func.isRequired
}

export default BookshelfList;