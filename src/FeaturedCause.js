import React, { Component } from 'react'
import apiUrl from './apiConfig'
import axios from 'axios'
import DOMPurify from 'dompurify'

class FeaturedCause extends Component {
    constructor () {
        super()

        this.state = {
            featured: {
                heading: '',
                text: ''
            }
        }
      }

      componentDidMount() {
        this.getFeaturedPost()
      }

      getFeaturedPost = () => {
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
        return (
          
            <div className="featured-cause">
            {/* <h2>Featured Article</h2> */}
            { this.state.featured &&
            <div className="cause-wrap">
                <figure className="m-0 position-relative">
                    <a href="#"><img src={require('./images/classroom.jpg')} alt="" /></a>
                </figure>

                <div className="cause-content-wrap mobile-padding-small">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                        <h3 className="entry-title w-100 m-0 mobile-heading" style={{ fontSize: '24px' }}>{this.state.featured && this.state.featured.heading }</h3>
                        {/* <h3 className="entry-title w-100 m-0">{this.props.page}</h3> */}

                    </header>{/* .entry-header */}

                    <div className="entry-content">
                    <p className="m-0 single-post-text single-post-preview"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(this.state.featured && this.state.featured.text)
                      }}
                    />
                                        {/* {this.props.description} */}

                    </div>{/* .entry-content */}

                    {/* <div className="fund-raised w-100">
                        <div className="fund-raised-bar-3 barfiller">
                            <div className="tipWrap">
                                <span className="tip"></span>
                            </div>

                            <span className="fill" data-percentage="83"></span>
                        </div>

                        <div className="fund-raised-details d-flex flex-wrap justify-content-between align-items-center">
                    
                        </div>
                    </div> */}

                </div>{/* .cause-content-wrap */}
            </div>}
        </div>
        )
    }
}

export default FeaturedCause
