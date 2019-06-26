import React, {Component} from 'react'
import './SearchBar.css'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render() {
        return(
            <form className = "search" /* onSubmit = {this.handleSubmit} */ className = "search-bar"> 
                <input 
                    type = "text"
                    name = "search"
                    value = {this.state.search}
                    placeholder = "Look for"
                    onChange = {this.handleChange}/>
            </form>
        )
    }
}

export default SearchBar