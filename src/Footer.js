import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import apiUrl from './apiConfig'
import { Link } from 'react-router-dom'

class Footer extends Component {
    constructor () {
        super()

        this.state = {
            newsPosts: []
        }
      }

      componentDidMount() {
        this.getAllNewsPosts()
      }

      getAllNewsPosts = () => {
        axios.get(`${apiUrl}/news/recent`)
  
          .then(res => {
            this.setState({ newsPosts: res.data.blogposts })
          })
      }

    render() {
        const recentNews = this.state.newsPosts.map(newsPost => 
                       <li key={newsPost._id}>
                         <h3><Link to={'/posts/' + newsPost._id}>  {newsPost.heading}</Link> </h3> 
                          <div className="posted-date">{newsPost.date}</div>
                      </li>  
                      ) 

        return (
            <footer className="site-footer">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="foot-about">
                                <h2>Mision</h2>

                                <p>The LCLO Group, LLC operates collaboratively with public-private partners (higher education experts, corporate leaders, and public and non-profit agencies) to develop and implement solutions to more equitable global workforce development, talent cultivation, and training opportunities and resources within the context of emerging regional economies of Southeast Asia (ASEAN region).</p>
    
 
                            </div>{/* .foot-about */}
                        </div>{/* .col */}
    
                        <div className="col-12 col-md-6 col-lg-2 mt-5 mt-md-0">
                            <h2>Site Links</h2>
    
                            <ul className="foot-site-links"> 
                           <h3> <li><Link to="/capacity_building">Capacity Building</Link> </li></h3>
                             <h3> <li><Link to="/training">Training</Link></li></h3>
                             <h3> <li><Link to="/entrepreneurship">Entrepreneurship</Link></li></h3>
                             <h3> <li><Link to="/news">News</Link></li></h3>
                             <h3> <li><Link to="/resources">Resources</Link></li></h3>
                             <h3> <li><Link to="/points_of_encounter">Points of Encounter</Link></li></h3>
                            </ul>
                        </div>{/* .col */}
    
                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <div className="foot-latest-news">
                                <h2>Latest News</h2>
    
                                <ul>
                                        {recentNews }
                                </ul>
                            </div>{/* .foot-latest-news */}
                        </div>{/* .col */}
    
                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <div className="foot-contact">
                                <h2>Contact</h2>
    
                                <ul>
                                <li> 
                                    <a href="tel:1-617-770-6583">
                                    <FontAwesomeIcon icon="phone"className="footer-icon"/><span>1-617-770-6583</span>
                                    </a>
                                </li>
                                    <li> 
                                    <a href="mailto:lclogroup@lclo.com">                                        
                                    <FontAwesomeIcon icon="envelope" className="footer-icon"/><span>lclogroup@lclo.com</span>
                                    </a>  

                                    </li>
                                    <li> 
                                        <FontAwesomeIcon icon="marker" className="footer-icon"/><span> 772 Hope St, Providence, RI</span>
                                    </li>
                                </ul>
                            </div>{/* .foot-contact */}
    
                   
                        </div>{/* .col */}
                    </div>{/* .row */}
                </div>{/* .container */}
            </div>{/* .footer-widgets */}
    
            <div className="footer-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="m-0">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
    {/* Copyright &copy<script>document.write(new Date().getFullYear())</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>{/* .col-12 */}
                    </div>{/* .row */}
                </div>{/* .container */}
            </div>{/* .footer-bar */}
        </footer>
        )
    }
}

export default Footer
