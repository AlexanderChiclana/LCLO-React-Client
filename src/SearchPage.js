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
        //   .get(`${apiUrl}/blogposts?tags=${this.props.id}`)
        .get(`${apiUrl}/search/${this.props.id}`)
    
          .then(res => {
            console.log(res)
            this.setState({ blogposts: res.data.blogposts })
          })
      }

    render() {
        const BlogpostList = () => this.state.blogposts.map(blogpost => 
            <div key={blogpost._id}>
              {
                  this.state.blogposts.length !== 0 ? <Blogpost heading={blogpost.heading} text={blogpost.text} id={blogpost._id} date={blogpost.date} tags={blogpost.tags}/> : <h2>No Results</h2>
            } 
            </div>
          ) 

        return (
            <div className="single-page news-page">
            <div className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-12">

        { this.props.empty ? <h1>Search LCLO Site</h1> : <h1>Search Results: <i>{this.props.id}</i></h1> }
             </div>{/* .col */} 
        </div>{/* .row */}
    </div>{/* .container */}
</div>{/* .page-header */}

<div className="news-wrap ">
    <div className="container">
        <div className="row tablet-col-reverse">

            { 
                !this.props.empty && 
                <div className="col-12 col-lg-8 ">
                    <BlogpostList />
                </div>
            }

            <div className={ this.props.empty ? 'col-12' : 'col-12 col-lg-4'} >
                <div className="sidebar">

                <SearchWidget wide={this.props.empty}/>
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
