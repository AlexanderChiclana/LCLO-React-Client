import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import Blogpost from './Blogpost'
import SearchWidget from './SearchWidget'
import UpcomingEvents from './UpcomingEvents'


class SearchPage extends Component {
    constructor() {
        super()
    
        this.state = {
            blogposts: [],
            empty: false
        }
      }
    
      componentDidMount() {
        this.getSearchResults()
      }

    
      getSearchResults = () => {
        axios
          .get(`${apiUrl}/blogposts?tags=${this.props.id}`)
    
          .then(res => {
            console.log(res)
            this.setState({ blogposts: res.data.blogposts })
          })
      }

    render() {
        const BlogpostList = () => this.state.blogposts.map(blogpost => 
            <div key={blogpost._id}>
              <Blogpost heading={blogpost.heading} text={blogpost.text} id={blogpost._id} date={blogpost.createdAt} tags={blogpost.tags}/> 
            </div>
          ) 

        return (
            <div className="single-page news-page">
            <div className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Search Results: <i>{this.props.id}</i></h1>
             </div>{/* .col */} 
        </div>{/* .row */}
    </div>{/* .container */}
</div>{/* .page-header */}

<div className="news-wrap">
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-8">

                 <BlogpostList />

                <ul className="pagination d-flex flex-wrap align-items-center p-0">
                    <li className="active"><a href="#">01</a></li>
                    <li><a href="#">02</a></li>
                    <li><a href="#">03</a></li>
                </ul>
            </div>

            <div className="col-12 col-lg-4">
                <div className="sidebar">

                <SearchWidget />
                <UpcomingEvents />
                
                </div>{/* .sidebar */}
            </div>{/* .col */}
        </div>
    </div>
</div>
        </div>
        )
    }
}

export default SearchPage
