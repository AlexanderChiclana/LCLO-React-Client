import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'

class UpcomingEvent extends Component {
  state = {
    open: false
  }

  openDescription = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    return (
      <li
        className="d-flex flex-wrap align-items-center"
      >
        <figure
          className="d-flex justify-content-center"
          onClick={this.openDescription}
          style={{ cursor: 'pointer' }}
        >
          <img
            className="LCLO-Icon"
            src={require('./images/LCLO-Icon.png')}
            style={{ width: '60%' }}
            alt=""
          />
        </figure>

        <div
          className="entry-content d-flex align-items-center"
          style={{ cursor: 'pointer' }}
          onClick={this.openDescription}
        >
          <a className="d-flex">
            <h3
              className="entry-title"
              style={{
                color: '#ff4800',
                marginRight: '5px',
                fontSize: this.props.home && '20px'
              }}
            >
              {this.props.shortDate + ' '}
            </h3>{' '}
            <h3
              className="entry-title"
              style={{ fontSize: this.props.home && '20px' }}
            >
              {this.props.heading}
            </h3>
          </a>
        </div>

        {this.state.open && (
          <div
            className="single-post-preview"
            style={{ padding: '10px', width: '100%' }}
          >
            {' '}
            <div
              style={{
                padding: '10px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width: '100%',
                border: '1px solid #E0E0E0',
                borderRadius: '10px'
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(this.props.text)
                }}
              ></div>
            
            { this.props.linkedBlogpost &&
            <Link to={`/posts/${this.props.linkedBlogpost}`}>
              <div
                className="btn gradient-bg roundButtonSmall"
                style={{ color: 'white !important', marginTop: '0px' }}
              >
                Learn More
              </div>
              </Link>
            }
            </div>
          </div>
        )}
      </li>
    )
  }
}

class UpcomingEvents extends Component {
  constructor() {
    super()

    this.state = {
      upcoming: []
    }
  }

  componentDidMount() {
    this.getUpcomingEvents()
  }

  getUpcomingEvents = () => {
    axios.get(`${apiUrl}/upcoming`).then(res => {
      this.setState({
        upcoming: res.data.calendar
      })
    })
  }

  render() {
    const UpcomingList = () =>
      this.state.upcoming.map((upcoming, index) => (
        <UpcomingEvent
          key={index}
          home={this.props.home}
          shortDate={upcoming.shortDate}
          linkedBlogpost={upcoming.linkedBlogpost}
          heading={upcoming.heading}
          text={upcoming.text}
        />
      ))

    return (
      <div
        className="popular-posts tablet-wide tablet-no-margin"
        style={{ marginTop: this.props.home ? '10px' : null }}
      >
        {this.state.upcoming.length !== 0 && !this.props.home && (
          <h2>Upcoming Events</h2>
        )}

        <ul className="p-0" style={{ margin: this.props.home ? '0px' : null }}>
          <UpcomingList home={this.props.home} />
        </ul>
      </div>
    )
  }
}

export default UpcomingEvents
