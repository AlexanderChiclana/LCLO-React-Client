import React, { Component } from 'react'
import axios from 'axios'
// import apiUrl from './apiConfig'
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
      .get(`https://cdn.contentful.com/spaces/5babw3v5cb9l/environments/master/entries?access_token=tT0wH4gdjnRMag6VTNIhIQtOw2A0QR-L6iSeekeNuNM&content_type=blogpost&query=${this.props.id}`)

      .then(res => {
        console.log(res.data.items)
        this.setState({ blogposts: res.data.items })
      })
  }

  render() {
    const BlogpostList = () =>
      this.state.blogposts.map((blogpost, index) => (
        <div key={index}>
          {this.state.blogposts.length !== 0 ? (
            <Blogpost
              heading={blogpost.fields.heading}
              text={blogpost.fields.text.content[0].content[0].value}
              id={blogpost.sys.id}
              date={blogpost.fields.date}   
              tags={blogpost.fields.tags}
            />
          ) : (
            <h2>No Results</h2>
          )}
        </div>
      ))

    return (
      <div className="single-page news-page">
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {this.props.empty ? (
                  <h1>Search LCLO Site</h1>
                ) : (
                  <h1>
                    Search Results: <i>{this.props.id}</i>
                  </h1>
                )}
              </div>
              {/* .col */}
            </div>
            {/* .row */}
          </div>
          {/* .container */}
        </div>
        {/* .page-header */}

        <div className="news-wrap mobile-padding-small">
          <div className="container">
            <div className="row tablet-col-reverse">
              {!this.props.empty && (
                <div className="col-12 col-lg-8 ">
                  <BlogpostList />
                </div>
              )}

              <div className={this.props.empty ? 'col-12' : 'col-12 col-lg-4'}>
                <div className="sidebar mobile-margin-y-medium">
                  <SearchWidget wide={this.props.empty} />
                  <UpcomingEvents />
                </div>
                {/* .sidebar */}
              </div>
              {/* .col */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage
