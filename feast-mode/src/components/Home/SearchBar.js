import React, {Component} from 'react'

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
            <form className = "search" /* onSubmit = {this.handleSubmit} */> 
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