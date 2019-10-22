import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

import DOMPurify from 'dompurify'


class UpcomingEvent extends Component {
    state={
        open: false
    }

    openDescription = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        return (
            <li className="justify-content-between align-items-center">
            {/* <figure><a href="#"><img src={require('./images/u-1.jpg')} alt="" /></a></figure> */}
    

            <div className="entry-content" 
                                            style={{ 
                                                overflow: 'hidden', 
                                                marginBottom: '20px'
                                                }}>
                
               <h6 
                    className="entry-title cal-event" 
                    onClick={this.openDescription}
                    style={{ cursor: 'pointer'
                                 }}                    
                
                >{this.props.heading}</h6>

            <p>
                {this.props.shortDate}
            </p>

                <div className="post-metas d-flex flex-wrap align-items-center">
                    {/* <span className="posted-date"><a href="#">{upcoming.shortDate}</a></span> */}
                    {/* <span className="event-location"><a href="#">Event Details</a></span> */}
                </div>

            { this.state.open && <p className="single-post-text single-post-preview" dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(this.props.text) }} ></p> }                         
                
            </div>
 
        </li>
        )
    }
}


class UpcomingEvents extends Component {
    constructor () {
        super()

        this.state = {
            upcoming: []
        }
      }

      componentDidMount() {
        this.getUpcomingEvents()
      }

      getUpcomingEvents = () => {
        axios.get(`${apiUrl}/upcoming`)
          .then(res => {
            this.setState({ 
                upcoming: res.data.calendar
            })
          })
      }

    render() {
        const UpcomingList = () => this.state.upcoming.map((upcoming, index) => 
            <UpcomingEvent key={index} shortDate={upcoming.shortDate} heading={upcoming.heading} text={upcoming.text}/>
      )  

        return (
            <div className="upcoming-events">
            <h2 style={{ marginBottom: '30px' }}>Upcoming Events</h2>

            <ul className="p-0" style={{ listStyleType: 'none' }}>

                <UpcomingList />

            </ul>
 

        </div>
        )
    }
}

export default UpcomingEvents
