import React, { Component } from 'react'
import SearchWidget from './SearchWidget'
import PopularPosts from './PopularPosts'
// import UpcomingEvents from './UpcomingEvents'
// import FeaturedCause from './FeaturedCause'
// import DOMPurify from 'dompurify'
import apiUrl from './apiConfig'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Image from './Image.js'

class SinglePostPage extends Component {
  constructor() {
    super()

    this.state = {
      anything: '',
      text: '',
      nextHeading: '',
      nextId: '',
      heading: ''
    }
  }

  componentDidMount() {
    this.getBlogPost()
    this.getNextBlogPost()
  }

  getBlogPost = () => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/5babw3v5cb9l/environments/master/entries/${this.props.id}?access_token=tT0wH4gdjnRMag6VTNIhIQtOw2A0QR-L6iSeekeNuNM`
      )

      .then(res => {
        console.log(res)
        this.setState({
          text: res.data.fields.text,
          heading: res.data.fields.heading,
          image: res.data.fields.image && res.data.fields.image.sys.id,
          page: res.data.fields.page,
          video: res.data.fields.video
        })
      })
  }

  getNextBlogPost = () => {
    axios.get(`${apiUrl}/blogposts/${this.props.id}/next`).then(res => {
      res.data.blogpost &&
        this.setState({
          nextHeading: res.data.blogpost.heading,
          nextId: res.data.blogpost._id
        })
    })
  }

  render() {
    const opts = {
      height: '410',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        rel: 0
      }
    }

    return (
      <div className="single-page news-page">
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1> {this.state.heading} </h1>{' '}
              </div>{' '}
              {/* .col */}{' '}
            </div>{' '}
            {/* .row */}{' '}
          </div>{' '}
          {/* .container */}{' '}
        </div>{' '}
        {/* .page-header */}
        <div className="news-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="news-content">
                  {this.state.video && (
                    <div style={{ paddingBottom: '30px' }}>
                      <YouTube
                        videoId={this.state.video
                          .split('https://youtu.be/')
                          .pop()}
                        opts={opts}
                        onReady={this._onReady}
                      />
                    </div>
                  )}
                  {this.state.image && (
                    <React.Fragment>
                      <Image
                        imageURL={this.state.image}
                        alt=""
                        className="single-post-image"
                        style={{ paddingBottom: '30px' }}
                      />
                      <br />
                    </React.Fragment>
                  )}
                  {/* <header className='entry-header d-flex flex-wrap justify-content-between align-items-center'>
                            <div className='header-elements'>
                              <div className='posted-date'>March 12, 2018</div>

                              <h2 className='entry-title'>{this.state.heading}</h2>

                              <div className='post-metas d-flex flex-wrap align-items-center'>
                                <span className='cat-links'>
                                  in <a href='#'>Causes</a>
                                </span>
                                <span className='post-author'>
                                  by <a href='#'>Tom Phillips</a>
                                </span>
                                <span className='post-comments'>
                                  <a href='#'>3 Comments</a>
                                </span>
                              </div>
                            </div>

                            <div className='donate-icon'>
                              <a href='#'>
                                <img src={require('./images/donate-icon.png')} alt='' />
                              </a>
                            </div>
                          </header> */}
                  <div className="entry-content">
                    <p className="single-post-text">
                      {documentToReactComponents(this.state.text)}
                    </p>
                  </div>
                  <footer className="entry-footer">
                    {' '}
                    {/* <a href='#' className='btn gradient-bg'>Read More</a> */}{' '}
                  </footer>{' '}
                </div>

                <div className="d-flex flex-wrap justify-content-between">
                  <ul className="pagination d-flex flex-wrap align-items-center p-0">
                    <li className="active next-button">
                      {this.state.page === 'sea_fow' ? (
                        <Link to={'/sea-future-of-work'}>
                          <FontAwesomeIcon
                            icon="arrow-left"
                            className="footer-icon"
                          />
                          Back to SEA Future of Work
                        </Link>
                      ) : (
                        <Link to={'/' + this.state.page}>
                          <FontAwesomeIcon
                            icon="arrow-left"
                            className="footer-icon"
                          />
                          Back to {this.state.page}
                        </Link>
                      )}
                    </li>
                  </ul>

                  <div>
                    {this.state.nextId ? (
                      <ul className="pagination d-flex flex-wrap align-items-center p-0">
                        <li className="active next-button">
                          <Link to={'/posts/' + this.state.nextId}>
                            Next: {this.state.nextHeading + ' '}
                            <FontAwesomeIcon
                              icon="arrow-right"
                              className="footer-icon"
                            />
                          </Link>
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </div>

                {/* <ul className='pagination d-flex flex-wrap align-items-center p-0'>
                  <li className='active'>
                    <Link to={'/' + this.state.page}>
                      <FontAwesomeIcon
                        icon='arrow-left'
                        className='footer-icon'
                      />
                      Back to {this.state.page}
                    </Link>
                  </li>
                </ul> */}

                {/* {this.state.nextId ? (

                  <ul className='pagination d-flex flex-wrap align-items-center p-0'>
                    <li className='active'>
                      <Link to={'/posts/' + this.state.nextId}>
                        <FontAwesomeIcon
                          icon='arrow-right'
                          className='footer-icon'
                        />
                        Next: {this.state.nextHeading} 
                      </Link>
                    </li>
                  </ul>
            


                ) : null} */}
              </div>
              <div className="col-12 col-lg-4">
                <div className="sidebar">
                  <SearchWidget mobileNone={true} />{' '}
                  {this.state.page && <PopularPosts page={this.state.page} />}
                  {/* <UpcomingEvents />
                          <FeaturedCause />{' '} */}
                </div>{' '}
                {/* .sidebar */}{' '}
              </div>{' '}
              {/* .col */}{' '}
            </div>{' '}
          </div>{' '}
        </div>


        {this.state.page === 'sea_fow' && (
          <div className="help-us">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                  <h2>Apply to be a Future of Work Institute Fellow</h2>

                  <a
                    href="LCLOFutureofWorkApplication2021.pdf"
                    download
                    rel="noopener noreferrer"
                    className="btn orange-border roundButton"
                    target="_blank"
                  >
                    Application Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default SinglePostPage
