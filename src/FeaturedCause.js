import React, { Component } from 'react'
import apiUrl from './apiConfig'
import axios from 'axios'
import DOMPurify from 'dompurify'

class FeaturedCause extends Component {
    constructor () {
        super()

        this.state = {
            featured: {}
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
            <h2>Featured Causes</h2>

            <div className="cause-wrap">
                <figure className="m-0 position-relative">
                    <a href="#"><img src={require('./images/classroom.jpg')} alt="" /></a>
                </figure>

                <div className="cause-content-wrap">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                        <h3 className="entry-title w-100 m-0">{this.state.featured.heading}</h3>
                    </header>{/* .entry-header */}

                    <div className="entry-content">
                    <p className="m-0"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(this.state.featured.text)
                      }}
                    />
                    </div>{/* .entry-content */}

                    <div className="fund-raised w-100">
                        <div className="fund-raised-bar-3 barfiller">
                            <div className="tipWrap">
                                <span className="tip"></span>
                            </div>{/* .tipWrap */}

                            <span className="fill" data-percentage="83"></span>
                        </div>{/* .fund-raised-bar */}

                        <div className="fund-raised-details d-flex flex-wrap justify-content-between align-items-center">
                            <div className="fund-raised-total mt-4">
                                Raised: $56 880
                            </div>{/* .fund-raised-total */}

                            <div className="fund-raised-goal mt-4">
                                Goal: $70 000
                            </div>{/* .fund-raised-goal */}
                        </div>{/* .fund-raised-details */}
                    </div>{/* .fund-raised */}
                </div>{/* .cause-content-wrap */}
            </div>{/* .cause-wrap */}
        </div>
        )
    }
}

export default FeaturedCause
