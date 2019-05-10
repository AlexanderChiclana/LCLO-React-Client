import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

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
              console.log(res)
            this.setState({ 
                upcoming: res.data.calendar
            })
          })
      }

    render() {
        const UpcomingList = () => this.state.upcoming.map(upcoming => 
            <li key={upcoming._id} className="d-flex flex-wrap justify-content-between align-items-center">
            <figure><a href="#"><img src={require('./images/u-1.jpg')} alt="" /></a></figure>

            <div className="entry-content">
                <h3 className="entry-title"><a href="#">{upcoming.heading}</a></h3>

                <div className="post-metas d-flex flex-wrap align-items-center">
                    <span className="posted-date"><a href="#">{upcoming.date}</a></span>
                    <span className="event-location"><a href="#">Event Details</a></span>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>)  

        return (
            <div className="upcoming-events">
            <h2>Upcoming Events</h2>

            <ul className="p-0">

                <UpcomingList />

            </ul>
        </div>
        )
    }
}

export default UpcomingEvents
