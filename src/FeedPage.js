import React, { Component } from 'react'
import Blogpost from './Blogpost'
import PopularPosts from './PopularPosts'
import axios from 'axios'
// import apiUrl from './apiConfig'
import UpcomingEvents from './UpcomingEvents'
import FeaturedCause from './FeaturedCause'
import FeedHero from './FeedHero'
import scrollToComponent from 'react-scroll-to-component'

class FeedPage extends Component {
  constructor() {
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
    axios
      // .get(`${apiUrl}/${this.props.page}`)
      .get(`https://cdn.contentful.com/spaces/5babw3v5cb9l/environments/master/entries?access_token=tT0wH4gdjnRMag6VTNIhIQtOw2A0QR-L6iSeekeNuNM&content_type=blogpost&fields.page[all]=${this.props.page}`)
    
      .then(res => {
        console.log(res.data.items) 
        res.data.items && this.setState({ blogposts: res.data.items })
      })
  }

  getFeatured = () => {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=99ce69454e34b0db7b2beff3ca748d65&language=en-US&page=1&include_adult=false&query=matrix').then(res => {
      console.log(res)
      this.setState({
        featured: res.data.results
      })
    })
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 4 }
    })
  }

  scrollToBlogpostList = () =>
    scrollToComponent(this.BlogpostList, {
      offset: -40,
      align: 'top',
      duration: 500
    })

  render() {
    const BlogpostList = () =>
      this.state.blogposts
        .slice(0, this.state.visible)
        .map((blogpost, index) => (
          <div key={index}>
            <Blogpost
              video={blogpost.fields.video}
              heading={blogpost.fields.heading}
              text={blogpost.fields.text.content[0].content[0].value}
              image={blogpost.fields.image && blogpost.fields.image.sys.id}
              id={blogpost.sys.id}
              date={blogpost.fields.date}   
              tags={blogpost.fields.tags}
              page={blogpost.fields.page}
              prevBlogpost={this.state.blogposts[index - 1]}
              nextBlogpost={this.state.blogposts[index + 1]}
            />
          </div>
        ))

    return (
      <div className="single-page news-page">
        <FeedHero
          image={this.props.heroImage}
          pageInitial={this.props.pageInitial}
          pageName={this.props.pageName}
          description={this.props.description}
          scrollToBlogpostList={this.scrollToBlogpostList}
        />

        <div className="news-wrap mobile-padding-none news-wrap-tablet ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="sidebar tablet-none">
                  <FeaturedCause
                    page={this.props.page}
                    description={this.props.description}
                    featured={this.state.featured}
                    icon={this.props.icon}
                  />
                  <PopularPosts page={this.props.page} />
                  <UpcomingEvents />
                </div>
              </div>
              {/* .col */}
              <div
                className="col-12 col-lg-8"
                ref={div => {
                  this.BlogpostList = div
                }}
              >
                <div className="sidebar desktop-none tablet-margin-bottom-small">
                  <FeaturedCause
                    page={this.props.page}
                    description={this.props.description}
                    featured={this.state.featured}
                    icon={this.props.icon}
                  />
                </div>
                {
                this.state.blogposts.length > 0 && <BlogpostList />
                }
                <br />
                {this.state.blogposts.length > this.state.visible ? (
                  <div
                    className="btn gradient-bg d-flex justify-content-center"
                    style={{ cursor: 'pointer', borderRadius: '15px' }}
                    onClick={this.loadMore}
                  >
                    {' '}
                    Load More Articles...{' '}
                  </div>
                ) : null}
                <div className="sidebar desktop-none tablet-order tablet-no-margin">
                  <PopularPosts page={this.props.page} />
                  <UpcomingEvents />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeedPage
