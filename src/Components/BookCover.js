import React from "react";
import PropTypes from 'prop-types';

function BookCover(props) {
    const smallThumbnail =
        props.book.imageLinks !== undefined ?
            props.book.imageLinks.smallThumbnail :
            ""

    return (
        <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${smallThumbnail}")`
        }}>
        </div>
    )
}

BookCover.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookCover;