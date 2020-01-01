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
        //     <li className="justify-content-between align-items-center">
        //     {/* <figure><a href="#"><img src={require('./images/u-1.jpg')} alt="" /></a></figure> */}
    

        //     <div className="entry-content" 
        //                                     style={{ 
        //                                         overflow: 'hidden', 
        //                                         marginBottom: '20px'
        //                                         }}>
                
        //        <h6 
        //             className="entry-title cal-event" 
        //             onClick={this.openDescription}
        //             style={{ cursor: 'pointer'
        //                          }}                    
                
        //         >{this.props.heading}</h6>

        //     <p>
        //         {this.props.shortDate}
        //     </p>

        //         <div className="post-metas d-flex flex-wrap align-items-center">

        //         </div>

        //     { this.state.open && <p className="single-post-text single-post-preview" dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(this.props.text) }} ></p> }                         
                
        //     </div>
 
        // </li>


// 
<li className="d-flex flex-wrap align-items-center" onClick={this.openDescription} style={{ cursor: 'pointer' }}>

<figure className="d-flex justify-content-center"><img src={require('./images/LCLO-Icon.png')} style={{ width: '60%' }} alt="" /></figure>

<div className="entry-content d-flex align-items-center">
    <a className="d-flex"><h3 className="entry-title" style={{ color: '#ff4800', marginRight: '5px' }}>{ this.props.shortDate + ' '}</h3> <h3 className="entry-title">{this.props.heading}</h3></a>
</div>

{ this.state.open && <div className="single-post-text single-post-preview" style={{ padding: '10px', width: '100%' }}> <p dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(this.props.text) }} style={{ padding: '10px', width: '100%', border: '1px solid #E0E0E0' }}></p></div> }                         

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
            <div className="popular-posts">
            {this.state.upcoming.length !== 0 && !this.props.home && <h2>Upcoming Events</h2>}
            
            <ul className="p-0" style={{ listStyleType: 'none' }}>

                <UpcomingList />

            </ul>
            

        </div>
        )
    }
}

export default UpcomingEvents
