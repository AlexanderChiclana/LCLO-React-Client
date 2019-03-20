import React, { Component } from 'react'

class SearchWidget extends Component {
    render() {
        return (
            <div className="search-widget">
            <form className="flex flex-wrap align-items-center">
                <input type="search" placeholder="Search..." />
                <button type="submit" className="flex justify-content-center align-items-center">GO</button>
            </form>{/* .flex */}
        </div>
        )
    }
}

export default SearchWidget
