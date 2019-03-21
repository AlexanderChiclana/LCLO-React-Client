import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
        
                 <header className="site-header">
           

           <div className="nav-bar">
               <div className="container">
                   <div className="row">
                       <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                       <Link to="/">
                           <div className="site-branding d-flex align-items-center">
      
                                   <a className="d-block"><img className="d-block small-image" src={require('./images/LCLO-Icon.png')} alt="logo" /> </a> 
                                   <div className="LCLO-Button">LCLO Group</div>                    
                            </div>
                            </Link>
                           <nav className="site-navigation d-flex justify-content-end align-items-center">
                               <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                   
                                   {/* <li><Link to="/">Home</Link></li> */}
                                   <li><a href="causes.html">Causes</a></li>
                                   {/* <li><a href="portfolio.html">Gallery</a></li> */}
                                   <li><Link to="/training">Training</Link></li>
                                   <li><Link to="/capacity_building">Capacity Building</Link></li>
                                   <li><Link to="/entrepreneurship">Entrepreneurship</Link></li>
                                   <li><Link to="/news">News</Link></li>
                                   <li><Link to="/resources">Resources</Link></li>
                                   <li><Link to="/points_of_encounter">Points of Encounter</Link></li>
                                   <li><a href="contact.html">Contact</a></li>
                               </ul>
                           </nav>
   
                           <div classNameName="hamburger-menu d-lg-none">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
                    </header>
        
        )
    }
}

export default NavBar
