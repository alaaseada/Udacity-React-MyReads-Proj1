import React from "react";
import PropTypes from "prop-types";

function BookshelfChanger(props) {
    return (
        <div className="book-shelf-changer" >
            <select value={props.book.shelf ? props.book.shelf : "none"} onChange={(e) => props.onChangeShelf(e.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookshelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookshelfChanger;