import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'



class SearchWidget extends Component {
    constructor () {
        super()
        this.state = {
            searchValue: ''
        }
      }
      handleChange = (event) => {
        this.setState({ searchValue: event.target.value })
      }

      handleSubmit = (event) => {
        event.preventDefault()
      }

    render() {
        return (
            <div className="search-widget">
            <form className="flex flex-wrap align-items-center" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchValue} onChange={this.handleChange} className="customInput"/>
                    <Link to={'/search/' + this.state.searchValue}>
                     <button type="submit" className="flex justify-content-center align-items-center">GO</button>
                    </Link>
                    
            </form>{/* .flex */}
        </div>
        )
    }
}

export default SearchWidget
