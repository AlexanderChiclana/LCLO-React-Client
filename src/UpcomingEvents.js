import React, { Component } from 'react'

class UpcomingEvents extends Component {
    render() {
        return (
            <div className="upcoming-events">
            <h2>Upcoming Events</h2>

            <ul className="p-0">
                <li className="d-flex flex-wrap justify-content-between align-items-center">
                    <figure><a href="#"><img src={require('./images/u-1.jpg')} alt="" /></a></figure>

                    <div className="entry-content">
                        <h3 className="entry-title"><a href="#">Fundraiser for Students</a></h3>

                        <div className="post-metas d-flex flex-wrap align-items-center">
                            <span className="posted-date"><a href="#">Aug 25, 2018</a></span>
                            <span className="event-location"><a href="#">Ball Room New York</a></span>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </li>

                <li className="d-flex flex-wrap justify-content-between align-items-center">
                    <figure><a href="#"><img src={require('./images/u-2.jpg')} alt="" /></a></figure>

                    <div className="entry-content">
                        <h3 className="entry-title"><a href="#">Registration Deadline</a></h3>

                        <div className="post-metas d-flex flex-wrap align-items-center">
                            <span className="posted-date"><a href="#">Aug 25, 2018</a></span>
                            <span className="event-location"><a href="#">Ball Room New York</a></span>
                        </div>

                        <p>Consectetur adipiscing elit. Mauris tempus vestib ulum.</p>
                    </div>
                </li>

                <li className="d-flex flex-wrap justify-content-between align-items-center">
                    <figure><a href="#"><img src={require('./images/u-3.jpg')} alt="" /></a></figure>

                    <div className="entry-content">
                        <h3 className="entry-title"><a href="#">LCLO Institute</a></h3>

                        <div className="post-metas d-flex flex-wrap align-items-center">
                            <span className="posted-date"><a href="#">Aug 25, 2018</a></span>
                            <span className="event-location"><a href="#">Ball Room New York</a></span>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </li>
            </ul>
        </div>
        )
    }
}

export default UpcomingEvents
