import React, { Component } from 'react'
import apiUrl from './apiConfig'
import axios from 'axios'
import DOMPurify from 'dompurify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FeaturedCause extends Component {
  constructor() {
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
    axios.get(`${apiUrl}/featured?page=${this.props.page}`).then(res => {
      console.log(res)
      this.setState({
        featured: res.data.blogposts[0]
      })
    })
  }
  render() {
    const icon = this.props.icon
    return (
      <div className="featured-cause">
        {this.state.featured && (
          <div className="cause-wrap">
    
            <div
              className="m-0 position-relative"
              style={{
                backgroundColor: '#FFA539',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px'
              }}
            >
              {/* <a href="#">
                <img src={require('./images/classroom.jpg')} alt="" />
              </a> */}
              
         
              <FontAwesomeIcon
                className="featured-icon"
                icon={icon}
                style={{ fontSize: '150px', color: '#59813D' }}
              /> 
              
        
              
            </div>

            <div
              className="cause-content-wrap mobile-padding-small"
              style={{ borderRadius: '0px 0px 10px 10px' }}
            >
              <header className="entry-header d-flex flex-wrap align-items-center">
                <h3
                  className="entry-title w-100 m-0 mobile-heading"
                  style={{ fontSize: '24px' }}
                >
                  {this.state.featured && this.state.featured.heading}
                </h3>
              </header>
              {/* .entry-header */}

              <div className="entry-content">
                <p
                  className="m-0 single-post-text single-post-preview"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      this.state.featured && this.state.featured.text
                    )
                  }}
                />
              </div>
              {/* .entry-content */}
            </div>
            {/* .cause-content-wrap */}
          </div>
        )}
      </div>
    )
  }
}

export default FeaturedCause
