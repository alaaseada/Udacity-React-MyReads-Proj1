import React from "react";
import BookshelfChanger from "./BookshelfChanger";
import BookCover from "./BookCover";
import PropTypes from 'prop-types';

function BookTop(props) {
    return (
        <div className="book-top">
            <BookCover book={props.book} />
            <BookshelfChanger book={props.book} onChangeShelf={(newShelf) => props.onBookTopChange(newShelf)} />
        </div>
    )
}

BookTop.propTypes = {
    book: PropTypes.object.isRequired,
    onBookTopChange: PropTypes.func.isRequired
}

export default BookTop;