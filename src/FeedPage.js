import React, { Component } from 'react'
import Blogpost from './Blogpost'
import PopularPosts from './PopularPosts'
import axios from 'axios'
import apiUrl from './apiConfig'
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
      .get(`${apiUrl}/${this.props.page}`)

      .then(res => {
        this.setState({ blogposts: res.data.blogposts })
      })
  }

  getFeatured = () => {
    axios.get(`${apiUrl}/featured?page=${this.props.page}`).then(res => {
      console.log(res)
      this.setState({
        featured: res.data.blogposts[0]
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
          <div key={blogpost._id}>
            <Blogpost
              video={blogpost.video}
              heading={blogpost.heading}
              text={blogpost.text}
              image={blogpost.image}
              id={blogpost._id}
              date={blogpost.date}
              tags={blogpost.tags}
              page={blogpost.page}
              prevBlogpost={this.state.blogposts[index - 1]}
              nextBlogpost={this.state.blogposts[index + 1]}
            />
          </div>
        ))

    return (
      <div className="single-page news-page">
        <FeedHero
          image={this.props.heroImage}
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
                  />
                </div>
                <BlogpostList />

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
