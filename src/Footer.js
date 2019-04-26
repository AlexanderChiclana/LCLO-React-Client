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
    
                                <ul className="d-flex flex-wrap align-items-center">
                                    <li><a href="#"><FontAwesomeIcon icon="pinterest-p" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon="facebook" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon="twitter" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon="dribbble" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon="behance" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon="linkedin" /></a></li>
                                </ul>
                            </div>{/* .foot-about */}
                        </div>{/* .col */}
    
                        <div className="col-12 col-md-6 col-lg-2 mt-5 mt-md-0">
                            <h2>Useful Links</h2>
    
                            <ul>
                            <Link to="/capacity_building"><li>Capacity Building</li></Link>
                            <Link to="/training"><li>Training</li></Link>
                            <Link to="/entrepreneurship"><li>Entrepreneurship</li></Link>
                            <Link to="/news"><li>News</li></Link>
                            <Link to="/resources"><li>Resources</li></Link>
                            <Link to="/points_of_encounter"><li>Points of Encounter</li></Link>
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
                                <li> <FontAwesomeIcon icon="phone" /><span>+45 677 8993000 223</span></li>
                                    <li> <FontAwesomeIcon icon="envelope" /><span>office@template.com</span></li>
                                    <li> <FontAwesomeIcon icon="marker" /><span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span></li>
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
