import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
            <div className={this.props.mobileNone ? 'mobile-none search-widget' : 'search-widget'}>

            <form className="flex flex-wrap align-items-center" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchValue} onChange={this.handleChange} className="customInput"/>
                    <Link to={'/search/' + this.state.searchValue}>
                     <button type="submit" className="flex justify-content-center align-items-center">                     
                       <FontAwesomeIcon icon={'search'} />
                    </button>

                    </Link>
                    
            </form>{/* .flex */}
        </div>
        )
    }
}

export default SearchWidget
