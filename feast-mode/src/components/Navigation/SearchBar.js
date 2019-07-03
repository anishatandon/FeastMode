import React, {Component} from 'react'

const SearchBar = () => {
    return(
        <form className = "search" className = "search-bar">
            <input
                type = "text"
                name = "search"
                placeholder = "Look for"/>
        </form>
    )
}

export default SearchBar
