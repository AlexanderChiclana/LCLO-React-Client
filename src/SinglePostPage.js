import React, { Component } from 'react'
import SearchWidget from './SearchWidget'
import PopularPosts from './PopularPosts'
import UpcomingEvents from './UpcomingEvents'
import FeaturedCause from './FeaturedCause'
import DOMPurify from 'dompurify'
import apiUrl from './apiConfig'
import axios from 'axios'

class SinglePostPage extends Component {
    constructor () {
        super()

        this.state = {
            anything: 'syes',
            text: '',
            heading: ''
        }
      }

      componentDidMount() {
        this.getAllBlogPosts()
      }

      getAllBlogPosts = () => {
        axios.get(`${apiUrl}/blogposts/${this.props.id}`)
  
          .then(res => {
              console.log(res)
            this.setState({ 
                text: res.data.blogpost.text,
                heading: res.data.blogpost.heading
            })
          })
      }

    render() {
        return (
        
            <div className="single-page news-page">
                <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{this.props.pageName}</h1>
                 </div>{/* .col */} 
            </div>{/* .row */}
        </div>{/* .container */}
    </div>{/* .page-header */}

    <div className="news-wrap">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8">

                <div className="news-content">
            <a href="#"><img src={'http://www.diycollegerankings.com/wp-content/uploads/2014/01/Colleges-for-Asian-Students-fb.jpg'} alt="" /></a>

            <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                <div className="header-elements">
                    <div className="posted-date">March 12, 2018</div>

                    <h2 className="entry-title">
                         {this.state.heading}                    
                    </h2>

                    <div className="post-metas d-flex flex-wrap align-items-center">
                        <span className="cat-links">in <a href="#">Causes</a></span>
                        <span className="post-author">by <a href="#">Tom Phillips</a></span>
                        <span className="post-comments"><a href="#">3 Comments</a></span>
                    </div>
                </div>

                <div className="donate-icon">
                    <a href="#"><img src={require('./images/donate-icon.png')} alt="" /></a>
                </div>
            </header>

            <div className="entry-content">
                <p dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(this.state.text) }} ></p>
            </div>

            <footer className="entry-footer">
                {/* <a href="#" className="btn gradient-bg">Read More</a> */}
            </footer>
        </div>
        
                    <ul className="pagination d-flex flex-wrap align-items-center p-0">
                        <li className="active"><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                    </ul>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="sidebar">

                    <SearchWidget />
                    <PopularPosts />
                    <UpcomingEvents />
                    <FeaturedCause />
                    
                    </div>{/* .sidebar */}
                </div>{/* .col */}
            </div>
        </div>
    </div>
            </div>
        )
    }
}

export default SinglePostPage
