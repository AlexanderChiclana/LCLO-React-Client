import React, { Component } from 'react'
import Blogpost from './Blogpost'
import PopularPosts from './PopularPosts'
import axios from 'axios'
import apiUrl from './apiConfig'
// import SearchWidget from './SearchWidget'
import UpcomingEvents from './UpcomingEvents'
import FeaturedCause from './FeaturedCause'
import FeedHero from './FeedHero'
import scrollToComponent from 'react-scroll-to-component'

class FeedPage extends Component {
    constructor () {
        super()

        this.state = {
            blogposts: [],
            visible: 4
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

      loadMore = () => {
        this.setState((prev) => {
          return { visible: prev.visible + 4 }
        })
       }

       scrollToBlogpostList = () => scrollToComponent(this.BlogpostList, { offset: -40, align: 'top', duration: 500 })

    render() {
        const BlogpostList = () => this.state.blogposts.slice(0, this.state.visible).map((blogpost, index) => 
            <div key={blogpost._id}>
              <Blogpost video={blogpost.video} heading={blogpost.heading} text={blogpost.text} image={blogpost.image} id={blogpost._id} date={blogpost.date} tags={blogpost.tags} page={blogpost.page}
              prevBlogpost={this.state.blogposts[index - 1]} nextBlogpost={this.state.blogposts[index + 1]}/> 
            </div>
          ) 

        return (
            <div className="single-page news-page">
                {/* <div className="page-header" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Our Mission: {this.props.pageName}</h1>
                 </div>
            </div>
            <div>
                <p className="text-white"> 
       
                </p>
            </div>
        </div>
    </div> */}

            <FeedHero pageName={this.props.pageName} description={this.props.description} scrollToBlogpostList={this.scrollToBlogpostList}/>


    <div className="news-wrap mobile-padding-small">
        <div className="container">
            <div className="row">
            
            <div className="col-12 col-lg-4">
                    <div className="sidebar">

                    {/* <SearchWidget /> */}
                    <FeaturedCause page={this.props.page} description={this.props.description} featured={this.state.featured}/>
                    <PopularPosts page={this.props.page}/>
                    <UpcomingEvents />
                    
                    </div>{/* .sidebar */}
                </div>{/* .col */}
                <div className="col-12 col-lg-8" ref={(div) => { this.BlogpostList = div }}>


                     <BlogpostList />

                    {/* <ul className="pagination d-flex flex-wrap align-items-center p-0">
                        <li className="active"><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                    </ul> */}
                    <br />
                   { this.state.blogposts.length > this.state.visible ? <div className="btn gradient-bg d-flex justify-content-center" style={{ cursor: 'pointer' }} onClick={this.loadMore}> Load More Articles... </div> : null}

                </div>

            </div>
        </div>
    </div>
            </div>
        )
    }
}

export default FeedPage
