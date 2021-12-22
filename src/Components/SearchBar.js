import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function SearchBar(props) {
    return (
        <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                    value={props.searchKey}
                    onChange={(e) => props.updateSearchKey(e.target.value)}
                />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    searchKey: PropTypes.string.isRequired,
    updateSearchKey: PropTypes.func.isRequired
}

export default SearchBar;