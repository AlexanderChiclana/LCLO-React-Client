import React, { Component } from 'react'
import Blogpost from './Blogpost'
import PopularPosts from './PopularPosts'
import axios from 'axios'
import apiUrl from './apiConfig'
import SearchWidget from './SearchWidget'
import UpcomingEvents from './UpcomingEvents'
import FeaturedCause from './FeaturedCause'

class FeedPage extends Component {
    constructor () {
        super()

        this.state = {
            blogposts: []
        }
      }

      componentDidMount() {
        this.getAllBlogPosts()
      }

      getAllBlogPosts = () => {
        axios.get(`${apiUrl}/${this.props.page}`)
  
          .then(res => {
            this.setState({ blogposts: res.data.blogposts })
          })
      }

      getFeatured = () => {
        axios.get(`${apiUrl}/featured?page=${this.props.page}`)
        .then(res => {
            console.log(res)
          this.setState({ 
              // is this the best way to do this? If the route returns nothing the page crashes
              featured: res.data.blogposts[0]
          })
        })
      }

    render() {
        const BlogpostList = () => this.state.blogposts.map(blogpost => 
            <div key={blogpost._id}>
              <Blogpost heading={blogpost.heading} text={blogpost.text} id={blogpost._id} date={blogpost.date} tags={blogpost.tags} page={blogpost.page}/> 
            </div>
          ) 

        return (
            <div className="single-page news-page">
                <div className="page-header" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{this.props.pageName}</h1>
                 </div>{/* .col */} 
            </div>{/* .row */}
            <div>
                <p className="text-white"> {this.props.description}
</p>
            </div>
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
                    <PopularPosts page={this.props.page}/>
                    <UpcomingEvents />
                    <FeaturedCause page={this.props.page} featured={this.state.featured}/>
                    
                    </div>{/* .sidebar */}
                </div>{/* .col */}
            </div>
        </div>
    </div>
            </div>
        )
    }
}

export default FeedPage
