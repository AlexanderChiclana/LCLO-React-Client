import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import DOMPurify from 'dompurify'

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
            //   console.log(res.data.calendar[0].shortDate)
            this.setState({ 
                upcoming: res.data.calendar
            })
          })
      }

    render() {
        const UpcomingList = () => this.state.upcoming.map(upcoming => 
            <li key={upcoming._id} className="justify-content-between align-items-center">
            {/* <figure><a href="#"><img src={require('./images/u-1.jpg')} alt="" /></a></figure> */}
            <h4>
                {upcoming.shortDate}
            </h4>

            <div className="entry-content" style={{ overflow: 'hidden', marginBottom: '20px' }}>
                <h4 className="entry-title" ><a href="#">{upcoming.heading}</a></h4>

                <div className="post-metas d-flex flex-wrap align-items-center">
                    {/* <span className="posted-date"><a href="#">{upcoming.shortDate}</a></span> */}
                    {/* <span className="event-location"><a href="#">Event Details</a></span> */}
                </div>

                <p dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(upcoming.text) }} ></p>                         
                
            </div>
        </li>)  

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
